
from django.shortcuts import get_object_or_404, render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import (
    EnWords,
    AmWords,
    Definitions,
    Examples,
    SubTypes,
    WordTypes
)
from .serializers import (
    EnWordsDeepSerializer,
    AmWordsShallowSerializer,
)
# Create your views here.


@api_view(['GET'])
def get_en_word_by_pk(request, pk):
    en_word = EnWords.objects.get(id=pk)
    # definitions = Definitions.objects.filter(id_en_word=en_words)
    serializer = EnWordsDeepSerializer(en_word, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def get_am_word_by_pk(request, pk):
    am_word = get_object_or_404(AmWords, id=pk)
    serializer = AmWordsShallowSerializer(am_word, many=False)
    return Response(serializer.data)
     


# @api_view(['GET'])
# def get_random_words(request):
#     words = Words.objects.order_by('?')[:10]
#     serializer = WordSerializer(words, many=True)
#     return Response(serializer.data)

# @api_view(['GET'])
# def get_words_by_en(request, en):
#     words = Words.objects.filter(en__startswith=en)[:10]
#     serializer = WordSerializer(words, many=True)
#     return Response(serializer.data)

# @api_view(['GET'])
# def getWord(request, pk):
#     word = get_object_or_404(Words, id=pk)
#     serializer = WordSerializer(word, many=False)
#     return Response(serializer.data)


# @api_view(['GET', 'PUT', 'DELETE'])
# def get_or_modify_word(request, pk):
#     word = get_object_or_404(Words, id=pk)
    
#     if request.method == 'GET':
#         serializer = WordSerializer(word, many=False)
#         return Response(serializer.data)
    
#     if request.method == 'PUT':
#         data = request.data
#         serializer = WordSerializer(instance=word, data=data)
#         if serializer.is_valid():
#             serializer.save()
#         return Response(serializer.data)
    
#     if request.method == 'DELETE':
#         word.delte()
#         return Response('successfully deleted')

