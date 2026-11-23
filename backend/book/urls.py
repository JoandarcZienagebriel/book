from django.urls import path
from .views import ListService, ListBook, DetailService, DetailBook, AvailabilityView, BookedTimesView, InfoView,CancelBooking

urlpatterns =[
    path('', ListService.as_view()),
    path('service/<int:pk>/', DetailService.as_view()),
    path('book/', ListBook.as_view()),
    path('book/<int:pk>/', DetailBook.as_view()),
    path('available/', AvailabilityView.as_view()),
    path("booked-times/", BookedTimesView.as_view(), name="booked-times"),
    path('info/', InfoView.as_view()),
    path('book/<int:pk>/cancel/', CancelBooking.as_view())
]