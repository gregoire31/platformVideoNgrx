# Location Film à la demande

## Description de l'application

L'application a été réalisé en respectant l'architecture micro service.<br/>
Il y a six services (décrits plus bas) dont un pour la vue.<br/>
L'application permet à un utilisateur de s'authentifier (création d'un compte ou connection)<br/>
Une fois authentifié, l'utilisateur aura générer un token jwt lui permettant d'utiliser l'application.<br/>
Toute les routes excepté le login nécessiteront le token (demande des films, détail d'un film ... (voir spécification Swagger.yml pour plus de détail))<br/>
De pouvoir visualiser une liste de film (une fois authentifié)<br/>
De pouvoir en acheter un et de le télécharger (fictif) et poster des commentaires. Ceci pour une durée de 24h<br/>


## Description des technologies

## Partie front-end
<ul>
<li>Utilisation du framework Angular</li>
<li>Utilisation de auth0/angular-jwt</li>
<li>Utilisation de MomentJs</li>
<li>Utilisation de RXJS</li>
</ul>

## partie Back-end
<ul>
<li>Utilisation NodeJs</li>
<li>Utilisation de Express</li>
<li>Utilisation de Consul</li>
<li>Utilisation de MongoDb</li>
</ul>

## Description des services

### Service Authentifiaction
Le service authentification permet à l'utilisateur de s'authentifier (login et register)
Il communique avec sa propre base de données.
Il permet également de vérifier si le token JWT est correct.

### Service Catalogs
Le service Catalogs va regrouper toutes les informations des films présents dans l'application.
Les images, les titres, les descriptions et le prix.

### Service Comment
Le service Comment permet aux utilisateurs d'intéragir entre eux, en envoyant des commentaires sur des films qu'ils ont au préalable payer.
En effet pour voir les commentaires des uns et des autres il faut avoir acheter le film

### Service Detail
Le service Detail permet de visualiser le détail d'un film et de le télécharger. Il regroupe tout le détail du film ainsi que la liste des utilisateurs authorisés à télécharger le film. Pour pouvoir télécharger le film il faut au préalable l'avoir acheté.

### Service Payment
Le service Payment permet de vérifier les coordonnées bancaire d'un utilisateur, les chiffres de la carte sont envoyé au service qui va les vérifier et renvoyer une réponse. Si la carte est correct, l'utilisateur pourra télécharger et poster des commentaires pour une durée de 24h.

### Service View
Le service view a été réalisé via le framework Angular.
Il permet de gérer les routes, de bénéficier du cycle de vie des components, de structurer plus facilement la vue, d'avoir un interceptor qui gère l'autorisation des routes.

### Specification
Le fichier Swagger.yml pouvant être ouvert via l'adresse : [swagger](https://editor.swagger.io/), Regroupe toutes routes de l'application, elle permet de voir quelles données sont nécessaires pour tel ou tel routes ainsi que la réponse. Il y est aussi mentionné si la requête a besoin d'une autorisation.

## lancer l'application et les tests
Pour lancer les tests , vous devez : <br/>
Installer Docker<br/>
Téléchargez le dossier<br/>
Placez vous à la racine et lancez la commande<br/>
```
docker-compose -f docker-compose.test.yml up

```

Une fois que les tests sont passés, vous pouvez lancer l'application avec la commande:
```
docker-compose up

```

Ouvez votre navigateur et allez sur : [localhost](http://localhost:4200)
<br/>
