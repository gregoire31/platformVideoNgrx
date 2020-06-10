db = db.getSiblingDB('users');

db.createUser({
  user: "user",
  pwd: "password",
  roles: [
    {
      role: "readWrite",
      db: "users"
    },
  ]
});

db.users.insert({
  _id: "5e99dd6a777f9369c81dec6f",
  username:'admin',
  password:'admin'
})

db.users.insert({
_id: "5e99dd6a766f9369c81d6670",
username:'gregoire',
password:'1234'
})

db.users.insert({
_id: "5229dd6a766f9369c81dec71",
username:'cockpit',
password:'petals'
})

db = db.getSiblingDB('comments');

db.createUser({
  user: "user",
  pwd: "password",
  roles: [
    {
      role: "readWrite",
      db: "comments"
    },
  ]
});

db.comments.insert({
  _id: "5e99dd6a766fp369c81dec71",
  comments: [
		{
			userId:"5e99dd6a777f9369c81dec6f",
			message: "My first comment",
			dateCreated: "2020-06-03 23:00"
    },
    {
			userId:"5e99dd6a766f9369c81d6670",
			message: "My second comment",
			dateCreated: "2020-06-03 23:00"
		}
	],
})

db.comments.insert({
  _id: "5e99dd6a766f4369c81dec71",
  comments: [
		{
			userId:"5e99dd6a777f9369c81dec6f",
			message: "My first comment",
			dateCreated: "2020-06-03 23:00"
    },
    {
			userId:"5e99dd6a766f9369c81d6670",
			message: "My second comment",
			dateCreated: "2020-06-03 23:00"
		}
	],
})

db.comments.insert({
  _id: "5e99dd6a766f9369c81d8c71",
  comments: [
		{
			userId:"5e99dd6a777f9369c81dec6f",
			message: "My first comment",
			dateCreated: "2020-06-03 23:00"
    },
    {
			userId:"5e99dd6a766f9369c81d6670",
			message: "My second comment",
			dateCreated: "2020-06-03 23:00"
		}
	],
})

db = db.getSiblingDB('details');

db.createUser({
  user: "user",
  pwd: "password",
  roles: [
    {
      role: "readWrite",
      db: "details"
    } 
  ]
});

db.details.insert({
  _id: "5e99dd6a766fp369c81dec71",
  usersPayed: [
    {
    userId:"5e99dd6a777f9369c81dec6f",
    dateCreated: "2020-06-03 23:00"
    },
    {
      userId:"5e99dd6a766f9369c81d6670",
      dateCreated: "2020-06-03 23:00"
    }
  ]
})

db.details.insert({
  _id: "5e99dd6a766f4369c81dec71",
  usersPayed: [
    {
    userId:"5e99dd6a777f9369c81dec6f",
    dateCreated: "2020-06-03 23:00"
    },
    {
      userId:"5e99dd6a766f9369c81d6670",
      dateCreated: "2020-06-03 23:00"
    }
  ]
})
db.details.insert({
  _id: "5e99dd6a766f9369c81d8c71",
  usersPayed: [
    {
    userId:"5e99dd6a777f9369c81dec6f",
    dateCreated: "2020-06-03 23:00"
    },
    {
      userId:"5e99dd6a766f9369c81d6670",
      dateCreated: "2020-06-03 23:00"
    }
  ]
})
db.details.insert({
  _id: "5e99dd6a766f936gc81dec71",
  usersPayed: [
    {
    userId:"5e99dd6a777f9369c81dec6f",
    dateCreated: "2020-06-03 23:00"
    },
    {
      userId:"5e99dd6a766f9369c81d6670",
      dateCreated: "2020-06-03 23:00"
    }
  ]
})
db.details.insert({
  _id: "5e99dd6a766f9369ca1dec71",
  usersPayed: [
    {
    userId:"5e99dd6a777f9369c81dec6f",
    dateCreated: "2020-06-03 23:00"
    },
    {
      userId:"5e99dd6a766f9369c81d6670",
      dateCreated: "2020-06-03 23:00"
    }
  ]
})
db.details.insert({
  _id: "5e9qdd6a766f9369c81d8c71",
  usersPayed: [
    {
    userId:"5e99dd6a777f9369c81dec6f",
    dateCreated: "2020-06-03 23:00"
    },
    {
      userId:"5e99dd6a766f9369c81d6670",
      dateCreated: "2020-06-03 23:00"
    }
  ]
})
db.details.insert({
  _id: "5m99dd6a766f936gc81dec71",
  usersPayed: [
    {
    userId:"5e99dd6a777f9369c81dec6f",
    dateCreated: "2020-06-03 23:00"
    },
    {
      userId:"5e99dd6a766f9369c81d6670",
      dateCreated: "2020-06-03 23:00"
    }
  ]
})
db.details.insert({
  _id: "5e99dd6a766f9369fr1dec71",
  usersPayed: [
    {
    userId:"5e99dd6a777f9369c81dec6f",
    dateCreated: "2020-06-03 23:00"
    },
    {
      userId:"5e99dd6a766f9369c81d6670",
      dateCreated: "2020-06-03 23:00"
    }
  ]
})

db = db.getSiblingDB('films');

db.createUser({
  user: "user",
  pwd: "password",
  roles: [
    {
      role: "readWrite",
      db: "films"
    } 
  ]
});

db.films.insert({
  _id: "5e99dd6a766fp369c81dec71",
  title: 'Terminator Genisys',
  image : 'http://fr.web.img5.acsta.net/c_215_290/pictures/15/06/29/10/53/495349.jpg',
  description : 'Le leader de la résistance John Connor envoie le sergent Kyle Reese dans le passé pour protéger sa mère, Sarah Connor et préserver l\'avenir de l’humanité. Des événements inattendus provoquent une fracture temporelle et Sarah et Kyle se retrouvent dans une nouvelle version du passé.',
  prix : '7€'
})

db.films.insert({
  _id: "5e99dd6a766f4369c81dec71",
  title: 'Warcraft : Le commencement',
  image : 'http://fr.web.img4.acsta.net/c_215_290/pictures/16/04/06/12/45/574116.jpg',
  description : 'Le pacifique royaume d\'Azeroth est au bord de la guerre alors que sa civilisation doit faire face à une redoutable race d’envahisseurs: des guerriers Orcs fuyant leur monde moribond pour en coloniser un autre. Alors qu’un portail s’ouvre pour connecter les deux mondes, une armée fait face à la destruction et l\'autre à l\'extinction.',
  prix: '15€'
})
db.films.insert({
  _id: "5e99dd6a766f9369c81d8c71",
  title: 'Parasite',
  image : 'http://fr.web.img2.acsta.net/c_215_290/pictures/20/02/12/13/58/3992754.jpg',
  description : 'Toute la famille de Ki-taek est au chômage, et s’intéresse fortement au train de vie de la richissime famille Park. Un jour, leur fils réussit à se faire recommander pour donner des cours particuliers d’anglais chez les Park. C’est le début d’un engrenage incontrôlable...',
  prix : '8€'
})
db.films.insert({
  _id: "5e99dd6a766f936gc81dec71",
  title: 'TRAINSPOTTING',
  image : 'http://fr.web.img2.acsta.net/c_215_290/medias/nmedia/18/65/54/67/19816073.jpg',
  description : 'Les aventures tragi-comiques de Mark Renton, junkie d\'Edimbourg, qui va tenter de se séparer de sa bande de copains, losers, menteurs, psychopathes et voleurs.',
  prix : '8€'
})
db.films.insert({
  _id: "5e99dd6a766f9369ca1dec71",
  title: 'LAS VEGAS PARANO',
  image : 'http://fr.web.img6.acsta.net/c_215_290/pictures/13/12/27/15/30/172720.jpg',
  description : 'A travers l\'épopée à la fois comique et horrible vers Las Vegas du journaliste Raoul Duke et de son énorme avocat, le Dr. Gonzo, évocation caustique et brillante de l\'année 1971 aux Etats-Unis.',
  prix : '10€'
})
db.films.insert({
  _id: "5e9qdd6a766f9369c81d8c71",
  title: 'BIG FISH',
  image : 'http://fr.web.img6.acsta.net/c_215_290/medias/nmedia/18/35/13/25/18371040.jpg',
  description : 'L\'histoire à la fois drôle et poignante d\'Edward Bloom, un père débordant d\'imagination, et de son fils William. Ce dernier retourne au domicile familial après l\'avoir quitté longtemps auparavant, pour être au chevet de son père, atteint d\'un cancer. Il souhaite mieux le connaître et découvrir ses secrets avant qu\'il ne soit trop tard. L\'aventure débutera lorsque William tentera de discerner le vrai du faux dans les propos de son père mourant.',
  prix : '13€'
})
db.films.insert({
  _id: "5m99dd6a766f936gc81dec71",
  title: 'HUMAN TRAFFIC',
  image : 'http://fr.web.img5.acsta.net/c_215_290/medias/nmedia/18/74/04/09/19227338.jpg',
  description : 'Cinq copains de Cardiff, dont la vie revêt le plus souvent des teintes grisâtres, ont pris l\'habitude chaque vendredi soir d\'aller en boite pour s\'amuser. Pour Jip, Koop, Nina, Lulu et Moff, tout peut arriver, même le meilleur, et tous les moyens sont bons.',
  prix : '11€'
})
db.films.insert({
  _id: "5e99dd6a766f9369fr1dec71",
  title: 'Les Affranchis',
  image : 'http://fr.web.img4.acsta.net/c_215_290/medias/nmedia/00/02/56/92/aff.jpg',
  description : 'Depuis sa plus tendre enfance, Henry Hill, né d\'un père irlandais et d\'une mère sicilienne, veut devenir gangster et appartenir à la Mafia. Adolescent dans les années cinquante, il commence par travailler pour le compte de Paul Cicero...',
  prix : '12€'
})

db.create