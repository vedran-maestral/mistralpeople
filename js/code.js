/**
 * Created by vedranma on 13.3.2015..
 * Based on Three.js periodic table
 */

//Get this from some server. Hard coded for the time being
// Detailed explanation of the data structure is in readme file

var people = [
    "dev-Vedran-He will twist your words beyond recognition", "Vedran", "Maricevic", 1, 1,
    "dev-Hani-Ruby on Rails or nothing", "Hani", "Zahirovic", 2, 1,
    "dev-Dzenan-Javascript will rule all devices", "Dzenan", "Sljivo", 3, 1,
    "boss-Mersed-WARNING!: smile can deceive", "Mersed", "Camdzic", 4, 1,
    "dev-Abdurahman-Java will rule all devices.", "Abdurahman", "Adilovic", 5, 1,
    "qa-Uzeir-Who would like a Donner today?", "Uzeir", "Basic", 6, 1,
    "dev-Ali-", "Ali", "Bazlamit", 1, 2,
    "dev-Adnan-", "Adnan", "Cocalic", 2, 2,
    "Dr-Dino-He is a Doctor for all bugs. If he cant find a bug, he will make one", "Dino", "Bukvic", 3, 2,
    "ux-Ena-", "Ena", "Cubric", 4, 2,
    "dev-Anita-", "Anita", "Mahmic", 5, 2,
    "dev-Matej-My shoulder is stronger then floor", "Matej", "Cica", 6, 2,
    "dev-EmirSa-", "Emir", "Sator", 1, 3,
    "cto-Sulejman-I owe you lunch!", "Sulejman", "Catibusic", 2, 3,
    "dev-Nerman-", "Nerman", "Deliahmetovic", 3, 3,
    "ux-Benjamin-", "Benjamin", "Delic", 4, 3,
    "dev-Mustafa-We can do it tomorrow.", "Mustafa", "Duranovic", 5, 3,
    "qa-DzenanD-What? Where? Who? Huh?", "Dzenan", "Dizdarevic", 6, 3,
    "pm-Nermina-Where is Honey?", "Nermina", "Durmic", 1, 4,
    "dev-Selma-", "Selma", "Djip", 2, 4,
    "ux-Jasenko-I need my Enzymes", "Jasenko", "Dzipa", 3, 4,
    "dev-Markus-I am babou Schwabou", "Markus", "Gaab", 4, 4,
    "ux-Ashraf-", "Ashraf", "Rahal", 5, 4,
    "sys-Edib-Server will be shutdown in 5 minutes...", "Edib", "Zilic", 6, 4,
    "dev-Vera-I need to exercise more...", "Vera", "Grubor", 1, 5,
    "oa-Haris-I have not checked all the prices yet.!", "Haris", "Hadzic", 2, 5,
    "dev-Salih-", "Salih", "Hajlakovic", 3, 5,
    "dev-Mehmed-", "Mehmed", "Jusic", 4, 5,
    "dev-Irfan-", "Irfan", "Kahvedzic", 5, 5,
    "dev-Emir-Ooooough", "Emir", "Kljucanin", 6, 5,
    "eng-Camila-and how is your English today?", "Camila", "Kubura", 1, 6,
    "dev-Edin-", "Edin", "Kulovic", 2, 6,
    "cto-Edvin-What is that smell?", "Edvin", "Lovic", 3, 6,
    "ux-TarikUx-I don't know. I am not sure. That looks ugly.", "Tarik", "Mehmedovic", 4, 6,
    "dev-TarikMe-I wish they change swimming pool water", "Tarik", "Mesetovic", 5, 6,
    "dev-AdnanMu-Company's main 'Configurator'", "Adnan", "Mulalic", 6, 6,
    "dev-Nihad-", "Nihad", "Ogresevic", 1, 7,
    "dev-Damir-We need to Cox that feature", "Damir", "Ramic", 2, 7,
    "qa-Daria-", "Daria", "Rojic", 3, 7,
    "dev-Milhad-I dream going to Nepal", "Milhad", "Salihi", 4, 7,
    "cmo-DamirSa-Ladies and gentleman, I am DFS", "Damir", "Saracevic", 5, 7,
    "Lady-Hiba-Dear, on your way out, could you take this bag?", "Hiba", "Prezime", 6, 7,
    "dev-DinoSe-", "Dino", "Selimbasic", 1, 8,
    "dev-Ervin-I wonder, was Frodo a programmer?", "Ervin", "Sikira", 2, 8,
    "ux-Vildana-", "Vildana", "Lojo", 3, 8,
    "dev-Seid-I wish I am a client... once", "Seid", "Solak", 4, 8,
    "dev-Elvis-Peugeot is the best car", "Elvis", "Spirjan", 5, 8,
    "qa-Zinajda-", "Zinajda", "Sarac", 6, 8,
    "hr-Azra-You need to read my emails!", "Azra", "Saric", 1, 9,
    "dev-Azmir-Based on my research, I made this document!", "Azmir", "Terzini", 2, 9,
    "qa-EmirZe-", "Emir", "Zelic", 3, 9,
    "qa-AdnanZi-Last night I was so cold...", "Adnan", "Zildzic", 4, 9,
    "dev-SemirSa-I am hungry", "Semir", "Sabic", 5, 9,
    "pm-Muamer-", "Muamer", "Cengic", 6, 9,
    "dev-Irhad-Do I yell?", "Irhad", "Babic", 1, 10,
    "dev-FaikCa-", "Faik", "Catibusic", 2, 10
];

var camera, scene, renderer;
var controls;

var objects = [];
var targets = { people: [], sphere: [], helix: [], grid: [] };

init();
animate();

function init() {

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 3000;

    scene = new THREE.Scene();

    // people
    for (var i = 0; i < people.length; i += 5) {

        var img = document.createElement('img');

        img.src = "img/" + people[ i + 0 ].split("-")[1] + ".jpg";

        img.className = "thumbimage";

        var element = document.createElement('div');
        element.className = 'element';
        element.style.backgroundColor = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ')';
        element.appendChild(img);

        element.setAttribute('data-mistral-image', img.src);
        element.setAttribute('data-mistral-comment', people[ i + 0 ].split("-")[2]);
        element.setAttribute('data-mistral-firstname', people[i + 1]);
        element.setAttribute('data-mistral-lastname', people[i + 2]);

        var symbol = document.createElement('div');
        if (people[ i + 1] === "Mersed") {
            symbol.className = 'boss'
        } else {
            symbol.className = 'symbol';
        }

        symbol.textContent = people[ i ].split("-")[0];

        element.appendChild(symbol);

        var details = document.createElement('div');
        details.className = 'details';
        details.innerHTML = people[ i + 1 ] + '<br>' + people[ i + 2 ];

        element.appendChild(details);

        var object = new THREE.CSS3DObject(element);
        object.position.x = Math.random() * 4000 - 2000;
        object.position.y = Math.random() * 4000 - 2000;
        object.position.z = Math.random() * 4000 - 2000;

        scene.add(object);

        objects.push(object);

        var object = new THREE.Object3D();
        object.position.x = ( people[ i + 3 ] * 175 ) - 1330;
        object.position.y = -( people[ i + 4 ] * 215 ) + 990;

        targets.people.push(object);
    }

    // sphere

    var vector = new THREE.Vector3();

    for (var i = 0, l = objects.length; i < l; i++) {

        var phi = Math.acos(-1 + ( 2 * i ) / l);
        var theta = Math.sqrt(l * Math.PI) * phi;

        var object = new THREE.Object3D();

        object.position.x = 800 * Math.cos(theta) * Math.sin(phi);
        object.position.y = 800 * Math.sin(theta) * Math.sin(phi);
        object.position.z = 800 * Math.cos(phi);

        vector.copy(object.position).multiplyScalar(2);

        object.lookAt(vector);

        targets.sphere.push(object);
    }

    // helix

    var vector = new THREE.Vector3();

    for (var i = 0, l = objects.length; i < l; i++) {

        var phi = i * 0.175 + Math.PI;

        var object = new THREE.Object3D();

        object.position.x = 900 * Math.sin(phi);
        object.position.y = -( i * 12 ) + 450;
        object.position.z = 900 * Math.cos(phi);

        vector.x = object.position.x * 2;
        vector.y = object.position.y;
        vector.z = object.position.z * 2;

        object.lookAt(vector);

        targets.helix.push(object);
    }

    // grid settings
    for (var i = 0; i < objects.length; i++) {

        var object = new THREE.Object3D();

        object.position.x = ( ( i % 5 ) * 400 ) - 800;
        object.position.y = ( -( Math.floor(i / 5) % 5 ) * 400 ) + 800;
        object.position.z = ( Math.floor(i / 25) ) * 1000 - 2000;

        targets.grid.push(object);
    }

    renderer = new THREE.CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = 'absolute';
    document.getElementById('people-container').appendChild(renderer.domElement);

    controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.rotateSpeed = 0.5;
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.addEventListener('change', render);

    var button = document.getElementById('people');
    button.addEventListener('click', function (event) {

        transform(targets.people, 2000);

    }, false);

    var button = document.getElementById('sphere');
    button.addEventListener('click', function (event) {

        transform(targets.sphere, 500);

    }, false);

    var button = document.getElementById('helix');
    button.addEventListener('click', function (event) {

        transform(targets.helix, 500);

    }, false);

    var button = document.getElementById('grid');
    button.addEventListener('click', function (event) {

        transform(targets.grid, 500);

    }, false);

    transform(targets.people, 2000);
    window.addEventListener('resize', onWindowResize, false);
}

function transform(targets, duration) {

    TWEEN.removeAll();

    for (var i = 0; i < objects.length; i++) {

        var object = objects[ i ];
        var target = targets[ i ];

        new TWEEN.Tween(object.position)
            .to({ x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();

        new TWEEN.Tween(object.rotation)
            .to({ x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();
    }

    new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render)
        .start();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
}

function animate() {
    requestAnimationFrame(animate);
    TWEEN.update();
    controls.update();
}

function render() {
    renderer.render(scene, camera);
}