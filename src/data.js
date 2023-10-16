
const data = {
    hero: {
        greeting: 'Bonjour',
        iam:'Je suis Patrick Thoannes',
        iamDetail:'Je suis un développeur front-end passionné par la création de sites web. Je suis déterminé à apporter innovation et qualité à chaque projet que je touche.',
        livingPlace:'Reims, France'
    },
    skill: {
        sectionTitle:'Compétences',
        items:[{
            logo:'logo-openclassrooms.png',
            logoAlt:'logo openclassrooms',
            title:'Formation Intégrateur Web',
            studyPeriod:'Fév 2023 - Nov 2023',
            description:[
                'Titre professionnel RNCP de niveau 5 (bac +2)',
                '12 projets professionalisants',
                'Intégration html css',
                'Développement du front-end en react-redux',
                'Déboguage',
                'Gestion de projet',
                'Cahier des charges',
                'Méthodes agiles',
                'Optimization de site, référencement et SEO',
                "Simulation d'interaction en environnement de travail"
            ],
            technologies:[
                {icon:'html5', name:'Html 5'},
                {icon:'css3', name:'Css 3'},
                {icon:'sass', name:'Sass/Scss'},
                {icon:'javascript', name:'Javascript'},
                {icon:'react', name:'React'},
                {icon:'redux', name:'Redux'},
                {icon:'figma', name:'Figma'},
                {icon:'git', name:'Git'}
            ]
        }]
    },
    portfolio:{
        sectionTitle: 'Réalisations',
        presentation:"Les projets les plus importants que j'ai développé.",
        items: [{
            image:'ohmyfood-website.jpg',
            title:'Site Ohmyfood',
            description:"Ce site permet aux utilisateur de localiser les restaurants répertorié ainsi que d'accéder à leurs menus. Dans une présentation soignée et à partir de la maquette figma, intégré avec une approche mobile-first, ce site comporte des animations css 3 comme un loading ou un slider pour liker un menu.",
            technologies:[
                'Html5',
                'Css3',
                'Css animation',
                'Figma',
                'Git'
            ],
            links:[
                {name:'Github Page', url:'https://pathne.github.io/projet4/'},
                {name:'Source Code', url:'https://github.com/pathne/projet4'}
            ]
        },{
            image:'argentbank-website.jpg',
            title:'Site ArgentBank',
            description:"Site bancaire permettant aux utilisateurs de s'authentifier pour accéder à la liste de leurs comptes. Développé en react-redux avec JWT pour l'authentification. Une spécification de l'api REST pour la partie transactions bancaires a été également rédigée.",
            technologies:[
                'Html5',
                'Css3',
                'React',
                'React-router',
                'Redux',
                'JWT',
                'Webstorage',
                'REST api',
                'green code',
                'Git'
            ],
            links:[
                {name:'Source Code', url:'https://github.com/pathne/projet11'}
            ]
        }]
    },
    contact: {
        sectionTitle: 'Contactez-moi',
        presentation: "N'hésitez pas à me contacter si vous cherchez un développeur front-end ou si vous voulez en savoir plus sur moi.",
        email: "patrickthoannes@gmail.com",
        emailCopied: 'Adresse email copiée'
    }
}

export default data
