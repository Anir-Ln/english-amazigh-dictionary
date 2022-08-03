from rest_framework.serializers import ModelSerializer
from .models import Words


class WordSerializer(ModelSerializer):
    class Meta:
        model = Words
        fields = '__all__'