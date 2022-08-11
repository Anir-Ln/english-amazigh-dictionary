from rest_framework.serializers import ModelSerializer, SerializerMethodField
from . import models



class SubTypesSerializer(ModelSerializer):
    class Meta:
        model = models.SubTypes
        fields = ('sub_type',)

class WordTypesSerializer(ModelSerializer):
    class Meta:
        model = models.WordTypes
        fields = ('word_type',)
        
class DefinitionsDeepSerializer(ModelSerializer):
    word_type = WordTypesSerializer(read_only=True, source='id_word_type')
    am_words = SerializerMethodField()
    class Meta:
        model = models.Definitions
        fields = ('id', 'definition', 'word_type', 'am_words')

    def get_am_words(self, obj):
        return AmWordsDeepSerializer(models.AmWords.objects.filter(id_definition=obj), many=True).data
    
    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['word_type'] = data['word_type']['word_type']
        return data


class ExamplesSerializer(ModelSerializer):
    class Meta:
        model = models.Examples
        fields = ('example',)

class AmWordsDeepSerializer(ModelSerializer):
    sub_type = SubTypesSerializer(source='id_sub_type')
    examples = SerializerMethodField()

    class Meta:
        model = models.AmWords
        fields = ('id', 'am_word', 'sub_type', 'examples')

    def get_examples(self, obj):
        return ExamplesSerializer(models.Examples.objects.filter(id_am_word=obj), many=True).data

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['sub_type'] = data['sub_type']['sub_type']
        return data

class EnWordsDeepSerializer(ModelSerializer):
    definitions = SerializerMethodField()
    class Meta:
        model = models.EnWords
        fields = ('id', 'en_word', 'definitions')
    
    def get_definitions(self, obj):
        return DefinitionsDeepSerializer(models.Definitions.objects.filter(id_en_word = obj), many=True).data


class DefinitionsSerializer(ModelSerializer):
    word_type = WordTypesSerializer(source='id_word_type')
    class Meta:
        model = models.Definitions
        fields = ('id', 'word_type', 'definition')
    
    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['word_type'] = data['word_type']['word_type']
        return data

class EnWordsSerializer(ModelSerializer):
    class Meta:
        model = models.EnWords
        fields = '__all__'

class AmWordsShallowSerializer(ModelSerializer):
    definition = DefinitionsSerializer(source='id_definition')
    examples = SerializerMethodField()
    en_word = EnWordsSerializer(source='id_en_word')

    class Meta:
        model = models.AmWords
        fields = ('id', 'am_word', 'en_word', 'definition', 'examples')
    
    def get_examples(self, instance):
        return ExamplesSerializer(models.Examples.objects.filter(id_am_word=instance), many=True).data
