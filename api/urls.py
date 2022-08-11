from django import views
from django.urls import path
from . import views

urlpatterns = [
    # path('words/', views.get_random_words),
    # path('words/<str:en>', views.get_words_by_en),
    # path('words/<int:en>', views.get_word_by_id)
    path('en_words/<int:pk>/', views.get_en_word_by_pk),
    path('am_words/<int:pk>/', views.get_am_word_by_pk)
]