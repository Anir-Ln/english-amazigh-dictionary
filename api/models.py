# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


# class Words(models.Model):
#     en = models.CharField(max_length=100)
#     am = models.TextField()

#     class Meta:
#         managed = True
#         db_table = 'words'


class AmWords(models.Model):
    am_word = models.CharField(blank=True, null=True, max_length=200)
    id_en_word = models.ForeignKey('EnWords', models.DO_NOTHING, db_column='id_en_word', blank=True, null=True)
    id_definition = models.ForeignKey('Definitions', models.DO_NOTHING, db_column='id_definition', blank=True, null=True)
    id_sub_type = models.ForeignKey('SubTypes', models.DO_NOTHING, db_column='id_sub_type', blank=True, null=True)

    class Meta:
        db_table = 'am_words'


class Definitions(models.Model):
    definition = models.CharField(blank=True, null=True, max_length=400)
    id_en_word = models.ForeignKey('EnWords', models.DO_NOTHING, db_column='id_en_word', blank=True, null=True)
    id_word_type = models.ForeignKey('WordTypes', models.DO_NOTHING, db_column='id_word_type', blank=True, null=True)

    class Meta:
        db_table = 'definitions'


class EnWords(models.Model):
    en_word = models.CharField(blank=True, null=True, max_length=200)

    class Meta:
        db_table = 'en_words'


class Examples(models.Model):
    example = models.CharField(blank=True, null=True, max_length=400)
    id_am_word = models.ForeignKey(AmWords, models.DO_NOTHING, db_column='id_am_word', blank=True, null=True)

    class Meta:
        db_table = 'examples'


class SubTypes(models.Model):
    sub_type = models.CharField(blank=True, null=True, max_length=50)

    class Meta:
        db_table = 'sub_types'


class WordTypes(models.Model):
    word_type = models.CharField(blank=True, null=True, max_length=50)

    class Meta:
        db_table = 'word_types'