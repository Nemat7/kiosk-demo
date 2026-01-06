from django.shortcuts import render, redirect
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .models import ContactMessage, Product, Category, Region, AlertBanner, VideoAdvertisement
from django.db.models import Q
from django.db import models
from django.utils import timezone
from django.template.response import TemplateResponse

def home(request):

    return render(request, 'main/index.html')

def alert_banner_partial(request):
    """HTMX partial для банера предупреждений"""
    print("=== ALERT BANNER PARTIAL CALLED ===")  # Отладочное сообщение

    alerts = AlertBanner.objects.filter(
        is_active=True,
        start_date__lte=timezone.now()
    ).filter(
        models.Q(end_date__isnull=True) | models.Q(end_date__gte=timezone.now())
    )[:5]

    print(f"Found {len(alerts)} alerts")  # Отладочное сообщение
    for alert in alerts:
        print(f"Alert: {alert.title}, Active: {alert.is_active}")

    return render(request, 'partials/alert_banner.html', {'alerts': alerts})


def video_advertisements_partial(request):
    """HTMX partial для видео объявлений"""
    print("=== VIDEO ADVERTISEMENT PARTIAL CALLED ===")  # Отладочное сообщение
    videos = VideoAdvertisement.objects.filter(
        is_active=True,
        start_date__lte=timezone.now()
    ).filter(
        models.Q(end_date__isnull=True) | models.Q(end_date__gte=timezone.now())
    ).order_by('display_order', '-created_at')

    print(f"Found {videos.count()} videos")  # Для отладки
    for video in videos:
        print(f"Video: {video.title}, Source: {video.get_video_source()}")

    return render(request, 'partials/video_advertisements.html', {'videos': videos})



def weather(request):
    return render(request, 'main/weather.html')


def marketplace(request):
    # Получаем параметры фильтрации из GET запроса
    region_slug = request.GET.get('region', '')
    category_slug = request.GET.get('category', '')
    product_type = request.GET.get('product_type', '')
    search_query = request.GET.get('search', '')

    # Начинаем с активных товаров
    products = Product.objects.filter(is_active=True)

    # Применяем фильтры
    if region_slug:
        products = products.filter(seller__region__slug=region_slug)

    if category_slug:
        products = products.filter(category__slug=category_slug)

    if product_type:
        products = products.filter(
            Q(title__icontains=product_type) |
            Q(description__icontains=product_type) |
            Q(variety__icontains=product_type)
        )

    if search_query:
        products = products.filter(
            Q(title__icontains=search_query) |
            Q(description__icontains=search_query) |
            Q(seller__company_name__icontains=search_query)
        )

    # Получаем все категории и регионы для фильтров
    categories = Category.objects.all()
    regions = Region.objects.all()

    # Типы продуктов для фильтра (можно вынести в модель если нужно)
    product_types = [
        {'value': 'potato', 'label': 'Картофель'},
        {'value': 'wheat', 'label': 'Пшеница'},
        {'value': 'corn', 'label': 'Кукуруза'},
        {'value': 'vegetables', 'label': 'Овощи'},
        {'value': 'fruits', 'label': 'Фрукты'},
    ]

    context = {
        'products': products,
        'categories': categories,
        'regions': regions,
        'product_types': product_types,
        'selected_region': region_slug,
        'selected_category': category_slug,
        'selected_product_type': product_type,
        'search_query': search_query,
    }

    return render(request, 'main/marketplace.html', context)


def services(request):
    return render(request, 'main/services.html')

def contact(request):
    return render(request, 'main/contact.html')


@csrf_exempt
def submit_contact(request):
    if request.method == 'POST':
        name = request.POST.get('name', '').strip()
        phone = request.POST.get('phone', '').strip()
        message = request.POST.get('message', '').strip()

        # Валидация
        if not name:
            return JsonResponse({
                'success': False,
                'message': 'Пожалуйста, введите ваше имя'
            })

        if not message:
            return JsonResponse({
                'success': False,
                'message': 'Пожалуйста, введите сообщение'
            })

        try:
            contact_message = ContactMessage(
                name=name,
                phone=phone,
                message=message
            )
            contact_message.save()

            return JsonResponse({
                'success': True,
                'message': 'Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.'
            })

        except Exception as e:
            print(f"Error: {e}")
            return JsonResponse({
                'success': False,
                'message': 'Ошибка при отправке сообщения'
            })

    return JsonResponse({
        'success': False,
        'message': 'Неверный метод запроса'
    })