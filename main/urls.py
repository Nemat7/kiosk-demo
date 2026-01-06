from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('weather/', views.weather, name='weather'),
    path('marketplace/', views.marketplace, name='marketplace'),
    path('services/', views.services, name='services'),
    path('contact/', views.contact, name='contact'),
    path('contact/submit/', views.submit_contact, name='submit_contact'),
    path('alerts-partial/', views.alert_banner_partial, name='alerts_partial'),
    path('videos-partial/', views.video_advertisements_partial, name='videos_partial'),

]