from django.db import models
from django.utils import timezone
# ========================== CONTACT =============================================
class ContactMessage(models.Model):
    name = models.CharField(max_length=100, verbose_name="Имя")
    phone = models.CharField(max_length=20, verbose_name="Телефон", blank=True)
    message = models.TextField(verbose_name="Сообщение")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")

    class Meta:
        verbose_name = "Контактное сообщение"
        verbose_name_plural = "Контактные сообщения"
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.name} - {self.created_at.strftime('%d.%m.%Y %H:%M')}"
# =============================================================================

# ========================== MARKETPLACE =======================================

class Region(models.Model):
    name = models.CharField(max_length=100, verbose_name="Названия региона")
    slug = models.SlugField(unique=True)

    class Meta:
        verbose_name =  "Регион"
        verbose_name_plural = "Регионы"
        db_table = 'marketplace_regions'  # Явное указание имени таблицы

    def __str__(self):
        return self.name

class Category(models.Model):
    name = models.CharField(max_length=100, verbose_name="Название категории")
    slug = models.SlugField(unique=True)
    icon = models.CharField(max_length=50, blank=True, verbose_name="Иконка FontAwesome")

    class Meta:
        verbose_name = "Категория"
        verbose_name_plural = "Категории"
        db_table = 'marketplace_categories'

    def __str__(self):
        return self.name


class Seller(models.Model):
    company_name = models.CharField(max_length=200, verbose_name="Название компании/Фермера")
    description = models.TextField(blank=True, verbose_name="Описание")
    phone = models.CharField(max_length=20, verbose_name="Телефон")
    avatar = models.ImageField(upload_to='sellers/avatars/', blank=True, null=True, verbose_name="Аватар")
    region = models.ForeignKey(Region, on_delete=models.CASCADE, verbose_name="Регион")
    address = models.TextField(blank=True, verbose_name="Адрес")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Продавец"
        verbose_name_plural = "Продавцы"
        db_table = 'marketplace_sellers'
        ordering = ['company_name']

    def __str__(self):
        return self.company_name


class Product(models.Model):
    seller = models.ForeignKey(Seller, on_delete=models.CASCADE, verbose_name="Продавец")
    category = models.ForeignKey(Category, on_delete=models.CASCADE, verbose_name="Категория")
    title = models.CharField(max_length=200, verbose_name="Название товара")
    description = models.TextField(verbose_name="Описание")
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Цена (сомони)")

    # Основные характеристики
    weight = models.DecimalField(max_digits=8, decimal_places=2, blank=True, null=True, verbose_name="Вес")
    weight_unit = models.CharField(max_length=10, default='кг', verbose_name="Единица веса")
    season = models.CharField(max_length=50, blank=True, verbose_name="Сезон")
    variety = models.CharField(max_length=100, blank=True, verbose_name="Сорт")
    is_organic = models.BooleanField(default=False, verbose_name="Органический")
    is_certified = models.BooleanField(default=False, verbose_name="Сертифицированный")

    # Изображение
    image = models.ImageField(upload_to='products/', verbose_name="Изображение товара")

    # Дата создания
    created_at = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True, verbose_name="Активный")
    # для каждого товара будут ставиться временные ограничения
    start_date = models.DateTimeField(default=timezone.now, verbose_name='Дата начала')
    end_date = models.DateTimeField(blank=True, null=True, verbose_name='Дата окончания')

    class Meta:
        verbose_name = "Товар"
        verbose_name_plural = "Товары"
        db_table = 'marketplace_products'
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['category', 'is_active']),
            models.Index(fields=['seller', 'is_active']),
        ]

    def __str__(self):
        return f"{self.title} - {self.seller.company_name}"

    def is_currently_active(self):
        now = timezone.now()
        if not self.is_active:
            return False
        if self.end_date and now > self.end_date:
            return False
        return now >= self.start_date


class ProductCharacteristic(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='characteristics')
    icon = models.CharField(max_length=50, verbose_name="Иконка FontAwesome")
    label = models.CharField(max_length=100, verbose_name="Название характеристики")
    value = models.CharField(max_length=200, verbose_name="Значение")

    class Meta:
        verbose_name = "Характеристика товара"
        verbose_name_plural = "Характеристики товаров"
        db_table = 'marketplace_product_characteristics'
        ordering = ['id']

    def __str__(self):
        return f"{self.label}: {self.value}"
# ==============================================================================

# ================================== MAIN PAGE =================================

class AlertBanner(models.Model):
    ALERT_TYPES = [
        ('warning', 'Предупреждение'),
        ('danger', 'Опасность'),
        ('info', 'Информация'),
        ('success', 'Успех'),
    ]

    title = models.CharField(max_length=200, verbose_name='Заголовок')
    message = models.TextField(verbose_name='Сообщение')
    alert_type = models.CharField(max_length=20, choices=ALERT_TYPES, default='warning',
                                  verbose_name='Тип предупреждения')
    is_active = models.BooleanField(default=True, verbose_name='Активно')
    start_date = models.DateTimeField(default=timezone.now, verbose_name='Дата начала')
    end_date = models.DateTimeField(blank=True, null=True, verbose_name='Дата окончания')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Баннер предупреждения'
        verbose_name_plural = 'Баннеры предупреждений'
        ordering = ['-created_at']

    def __str__(self):
        return self.title

    def is_currently_active(self):
        now = timezone.now()
        if not self.is_active:
            return False
        if self.end_date and now > self.end_date:
            return False
        return now >= self.start_date


class VideoAdvertisement(models.Model):
    title = models.CharField(max_length=200, verbose_name='Заголовок')
    description = models.TextField(blank=True, verbose_name='Описание')
    video_file = models.FileField(upload_to='advertisements/videos/', blank=True, null=True, verbose_name='Видео файл')
    video_url = models.URLField(blank=True, verbose_name='Ссылка на видео')
    is_active = models.BooleanField(default=True, verbose_name='Активно')
    display_order = models.IntegerField(default=0, verbose_name='Порядок отображения')
    start_date = models.DateTimeField(default=timezone.now, verbose_name='Дата начала')
    end_date = models.DateTimeField(blank=True, null=True, verbose_name='Дата окончания')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Видео объявление'
        verbose_name_plural = 'Видео объявления'
        ordering = ['display_order', '-created_at']

    def __str__(self):
        return self.title

    def is_currently_active(self):
        now = timezone.now()
        if not self.is_active:
            return False
        if self.end_date and now > self.end_date:
            return False
        return now >= self.start_date

    def get_video_source(self):
        """Безопасное получение источника видео"""
        if self.video_file and hasattr(self.video_file, 'url'):
            return self.video_file.url
        return self.video_url