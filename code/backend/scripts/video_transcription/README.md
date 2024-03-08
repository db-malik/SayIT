# Outil de transcription vidéo

C'est un outil de transcription vidéo qui peut transcrire l'audio d'une vidéo en texte et sauvegarder le texte en format Word ou txt.

## Comment l'utiliser

Tout d'abord, placez la vidéo que vous souhaitez transcrire dans le dossier `video`. Le fichier vidéo doit être au format mp4.

Ensuite, exécutez la fonction `main` et passez le type de fichier que vous souhaitez sauvegarder. Le type de fichier peut être 'docx' ou 'txt'. Par exemple :

```python
main('docx')
```

Cela transcrira l'audio de la vidéo en texte et sauvegardera le texte dans un fichier Word. Le fichier sauvegardé se trouvera dans le dossier `docx`, et le nom du fichier sera le même que celui du fichier vidéo original.

Si vous passez 'txt' comme type de fichier, le texte sera sauvegardé dans un fichier txt, et le fichier sauvegardé se trouvera dans le dossier `txt`.

## Remarques

Cet outil utilise l'API de reconnaissance vocale de Google pour la transcription audio, donc une connexion Internet est nécessaire. De plus, cet outil ne supporte actuellement que la transcription de l'audio en français.

Si vous souhaitez transcrire de l'audio dans une autre langue, vous devrez modifier le paramètre `language` dans la fonction `transcribe_video`. Par exemple, pour l'anglais, vous pouvez utiliser 'en-US'.

De plus, cet outil nécessite les bibliothèques `moviepy`, `speech_recognition` et `python-docx`. Si vous n'avez pas encore installé ces bibliothèques, vous pouvez les installer avec pip :

```bash
pip install moviepy speech_recognition python-docx
```
