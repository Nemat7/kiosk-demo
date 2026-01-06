from django.contrib import admin
from .models import ContactMessage, Region, Category, Seller, Product, ProductCharacteristic, AlertBanner, VideoAdvertisement


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['name', 'phone', 'created_at', 'short_message']
    list_filter = ['created_at']
    search_fields = ['name', 'phone', 'message']
    readonly_fields = ['created_at']

    def short_message(self, obj):
        return obj.message[:50] + '...' if len(obj.message) > 50 else obj.message

    short_message.short_description = 'Сообщение'


# ========================== MARKETPLACE ==============================

@admin.register(Region)
class RegionAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    prepopulated_fields = {'slug': ('name',)}

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'icon']
    prepopulated_fields = {'slug': ('name',)}

class ProductCharacteristicInline(admin.TabularInline):
    model = ProductCharacteristic
    extra = 1

@admin.register(Seller)
class SellerAdmin(admin.ModelAdmin):
    list_display = ['company_name', 'phone', 'region', 'created_at']
    list_filter = ['region', 'created_at']
    search_fields = ['company_name', 'phone']

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['title', 'seller', 'category', 'price', 'is_active', 'created_at']
    list_filter = ['category', 'is_active', 'created_at', 'is_organic', 'is_certified']
    search_fields = ['title', 'description', 'seller__company_name']
    inlines = [ProductCharacteristicInline]
    readonly_fields = ['created_at']

@admin.register(ProductCharacteristic)
class ProductCharacteristicAdmin(admin.ModelAdmin):
    list_display = ['product', 'label', 'value', 'icon']
    list_filter = ['icon']

# =====================================================================

# =========================== MAIN PAGE ==============================

@admin.register(AlertBanner)
class AlertBannerAdmin(admin.ModelAdmin):
    list_display = ['title', 'alert_type', 'is_active', 'start_date', 'end_date', 'created_at']
    list_filter = ['alert_type', 'is_active', 'start_date']
    search_fields = ['title', 'message']
    list_editable = ['is_active']

@admin.register(VideoAdvertisement)
class VideoAdvertisementAdmin(admin.ModelAdmin):
    list_display = ['title', 'is_active', 'display_order', 'start_date', 'end_date']
    list_filter = ['is_active', 'start_date']
    search_fields = ['title', 'description']
    list_editable = ['is_active', 'display_order']