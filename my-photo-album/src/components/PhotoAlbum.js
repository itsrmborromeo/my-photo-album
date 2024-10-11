import React, { useState } from 'react';
import Photo from './Photo';


//food category*
import burger from '../assets/foods/burger.jpg';
import cake from '../assets/foods/cake.jpg';
import carbonara from '../assets/foods/carbonara.jpg';
import chicken from '../assets/foods/chicken.jpg';
import chocolatecake from '../assets/foods/chocolatekeyk.jpg';
import corndog from '../assets/foods/corndog.jpg';
import dunkin from '../assets/foods/dunkin.jpg';
import donut from '../assets/foods/Dunkins.jpg';
import friesnbacon from '../assets/foods/friesnbacon.jpg';
import friess from '../assets/foods/friess.jpg';
import icecream from '../assets/foods/icecream.jpg';
import koreanfood from '../assets/foods/koreanfood.jpg';
import macncheese from '../assets/foods/macncheese.jpg';
import nachos from '../assets/foods/nachos.jpg';
import pastaa from '../assets/foods/pastaa.jpg';
import pizza from '../assets/foods/pizza.jpg';
import shawarma from '../assets/foods/shawarma.jpg';
import shawarmaa from '../assets/foods/shawarmaa.jpg';
import spaghetti from '../assets/foods/spaghetti.jpg';
import sweetnsour from '../assets/foods/sweetnsour.jpg';
//cars category
import car1 from '../assets/cars/180sx.jpg';
import car2 from '../assets/cars/Automotive.jpg';
import car3 from '../assets/cars/black.jpg';
import car4 from '../assets/cars/caaar.jpg'; 
import car5 from '../assets/cars/car2.jpg';
import car6 from '../assets/cars/carr.jpg';
import car7 from '../assets/cars/civic.jpg';
import car8 from '../assets/cars/classic.jpg';
import car9 from '../assets/cars/cr.jpg';
import car10 from '../assets/cars/dds.jpg';
import car11 from '../assets/cars/download.jpg';
import car12 from '../assets/cars/Luxury Cars.jpg';
import car13 from '../assets/cars/offroad.jpg';
import car14 from '../assets/cars/r34.jpg';
import car15 from '../assets/cars/s15.jpg'; 
import car16 from '../assets/cars/Supra.jpg';
import car17 from '../assets/cars/supraaaa.jpg';
import car18 from '../assets/cars/svjroadster.jpg';
import car19 from '../assets/cars/volkswagen.jpg';
import car20 from '../assets/cars/ysy.jpg';

//travel category
import tvl1 from '../assets/travel/passport.jpg';
import tvl2 from '../assets/travel/sea.jpg';
import tvl3 from '../assets/travel/barcelona.jpg';
import tvl4 from '../assets/travel/river.jpg';
import tvl5 from '../assets/travel/summer outfit.jpg';
import tvl7 from '../assets/travel/surf.jpg';
import tvl8 from '../assets/travel/lapulapu.jpg';
import tvl9 from '../assets/travel/london.jpg';
import tvl10 from '../assets/travel/paris.jpg';
import tvl11 from '../assets/travel/rome.jpg';
import tvl12 from '../assets/travel/san diego at night.jpg';
import tvl13 from '../assets/travel/switzerland.jpg';
import tvl14 from '../assets/travel/temple.jpg';
import tvl15 from '../assets/travel/trip.jpg';
import tvl16 from '../assets/travel/vegas.jpg';
import tvl17 from '../assets/travel/canada.jpg';
import tvl18 from '../assets/travel/korea.jpg';
import tvl19 from '../assets/travel/LA.jpg';
import tvl20 from '../assets/travel/cheers.jpg';
import tvl6 from '../assets/travel/canada ca.jpg';
//ART CATEGORY
import art1 from '../assets/art/art1.jpg';
import art2 from '../assets/art/art2.jpg';
import art3 from '../assets/art/art3.jpg';
import art4 from '../assets/art/art4.jpg';
import art5 from '../assets/art/art5.jpg';
import art6 from '../assets/art/art6.jpg';
import art7 from '../assets/art/art7.jpg';
import art8 from '../assets/art/art8.jpg';
import art9 from '../assets/art/art9.jpg';
import art10 from '../assets/art/art10.jpg';
import art11 from '../assets/art/art11.jpg';
import art12 from '../assets/art/art12.jpg';
import art13 from '../assets/art/art13.jpg';
import art14 from '../assets/art/art14.jpg';
import art15 from '../assets/art/art15.jpg';
import art16 from '../assets/art/art16.jpg';
import art17 from '../assets/art/art17.jpg';
import art18 from '../assets/art/art18.jpg';
import art19 from '../assets/art/art19.jpg';
import art20 from '../assets/art/art20.jpg';

//movies category
import photo1 from '../assets/movies/photo1.jpg';
import photo2 from '../assets/movies/photo2.jpg';
import photo3 from '../assets/movies/photo3.jpg';
import photo4 from '../assets/movies/photo4.jpg';
import photo5 from '../assets/movies/photo5.jpg';
import photo6 from '../assets/movies/photo6.jpg';
import photo7 from '../assets/movies/photo7.jpg';
import photo8 from '../assets/movies/photo8.jpg';
import photo9 from '../assets/movies/photo9.jpg';
import photo10 from '../assets/movies/photo10.jpg';
import photo11 from '../assets/movies/photo11.jpg';
import photo12 from '../assets/movies/photo12.jpg';
import photo13 from '../assets/movies/photo13.jpg';
import photo14 from '../assets/movies/photo14.jpg';
import photo15 from '../assets/movies/photo15.jpg';
import photo16 from '../assets/movies/photo16.jpg';
import photo17 from '../assets/movies/photo17.jpg';
import photo18 from '../assets/movies/photo18.jpg';
import photo19 from '../assets/movies/photo19.jpg';
import photo20 from '../assets/movies/photo20.jpg';


const PhotoAlbum = () => {
    const [photos] = useState([
        {
            id: 1,
            src: burger,
            category: 'foods',
            alt: 'Unable to see photos',
            desc: 'Juicy and delicious!',
        },

        {
            id: 2,
            src: car1,
            category: 'cars',
            alt: 'Unable to see photos',
            desc: 'The beauty of automotive design',
        },

        {
            id: 3,
            src: tvl3,
            category: 'travel',
            alt: 'Unable to see photos',
            desc: 'A city of vibrant culture and stunning architecture',
            
        },

        {
            id: 4,
            src: cake,
            category: 'foods',
            alt: 'Unable to see photos',
            desc: 'Sweet treat for every occasion',
        },

        {
            id: 5,
            src: carbonara,
            category: 'foods',
            alt: 'Unable to see photos',
            desc: 'Italian comfort food at its finest',

        },

        {
            id: 8,
            src: chicken,
            category: 'foods',
            alt: 'Unable to see photos',
            desc: 'Savory and satisfying',
        },

        {
            id: 6,
            src: chocolatecake,
            category: 'foods',
            alt: 'Unable to see photos',
            desc: 'A slice of heaven on a plate',
        },

        {
            id: 7,
            src: corndog,
            category: 'foods',
            alt: 'Unable to see photos',
            desc: 'A fair favorite',
        },



        {
            id: 9,
            src: dunkin,
            category: 'foods',
            alt: 'Unable to see photos',
            desc: 'Perfect for a morning pick-me-up'
        },

        {
            id: 10,
            src: donut,
            category: 'foods',
            alt: 'Unable to see photos',
            desc: 'Sweet, fluffy goodness'
        },

        {
            id: 11,
            src: friesnbacon,
            category: 'foods',
            alt: 'Unable to see photos',
            desc: 'The ultimate indulgence'
        },

        {
            id: 13,
            src: icecream,
            category: 'foods',
            alt: 'Unable to see photos',
            desc: 'The perfect summer treat'
        },

        {
            id: 14,
            src: koreanfood,
            category: 'foods',
            alt: 'Unable to see photos',
            desc: 'A flavorful journey'
        },

        {
            id: 12,
            src: friess,
            category: 'foods',
            alt: 'Unable to see photos',
            desc: 'Crispy on the outside, soft on the inside'
        },

        {
            id: 15,
            src: macncheese,
            category: 'foods',
            alt: 'Unable to see photos',
            desc: 'A childhood favorite'
        },

        {
            id: 16,
            src: nachos,
            category: 'foods',
            alt: 'Unable to see photos',
            desc: 'Perfect for sharing!'
        },

        {
            id: 17,
            src: pastaa,
            category: 'foods',
            alt: 'Unable to see photos',
            desc: 'A timeless Italian dish'
        },

        {
            id: 18,
            src: pizza,
            category: 'foods',
            alt: 'Unable to see photos',
            desc: 'A slice of happiness'
        },

        {
            id: 25,
            src: tvl4,
            category: 'travel',
            alt: 'Unable to see photos',
            desc: 'Serene waters and beautiful landscapes'
        },

        {
            id: 26,
            src: tvl5,
            category: 'travel',
            alt: 'Unable to see photos',
            desc: 'Ready for the sunny days ahead!'
        },

        

        {
            id: 28,
            src: tvl7,
            category: 'travel',
            alt: 'Unable to see photos',
            desc: 'Riding the waves in style'

        },

        {
            id: 19,
            src: shawarma,
            category: 'foods',
            alt: 'Unable to see photos',
            desc: 'When in doubt, shawarma it out!'
        },

        {
            id: 23,
            src: tvl8,
            category: 'travel',
            alt: 'Unable to see photos',
            desc: 'A fearless Indigenous Visayan Chieftain'
        },

        {
            id: 24,
            src: tvl9,
            category: 'travel',
            alt: 'Unable to see photos',
            desc: 'In the heart of London'
        },


        {
            id: 20,
            src: spaghetti,
            category: 'foods',
            alt: 'Unable to see photos',
            desc: 'Twirl it, swirl it, love it! 🍝✨'
        },

        {
            id: 21,
            src: shawarmaa,
            category: 'foods',
            alt: 'Unable to see photos',
            desc: 'Shawarma love at first bite! 🌯❤️'
        },

        {
            id: 22,
            src: sweetnsour,
            category: 'foods',
            alt: 'Unable to see photos',
            desc: 'Good food! Good mood!'
        },

        {
            id: 29,
            src: car2,
            category: 'cars',
            alt: 'Unable to see photos',
            desc: 'Got a need for speed? Let’s hit the road!'
        },

        {
            id: 30,
            src: car3,
            category: 'cars',
            alt: 'Unable to see photos',
            desc: 'Living life in the fast lane!'
        },

        {
            id: 31,
            src: car4,
            category: 'cars',
            alt: 'Unable to see photos',
            desc: 'Revving up for adventure!'
        },

        {
            id: 32,
            src: car5,
            category: 'cars',
            alt: 'Unable to see photos',
            desc: 'Life’s a journey—enjoy the ride!'
        },

        {
            id: 33,
            src: car6,
            category: 'cars',
            alt: 'Unable to see photos',
            desc: 'Built for speed and ready to conquer the road!'
        },

        {
            id: 34,
            src: car7,
            category: 'cars',
            alt: 'Unable to see photos',
            desc: 'Fast cars and freedom: the ultimate combo!'
        },

        {
            id: 35,
            src: car8,
            category: 'cars',
            alt: 'Unable to see photos',
            desc: 'These beauties are more than just metal; they’re art on wheels!'
        },

        {
            id: 36,
            src: car9,
            category: 'cars',
            alt: 'Unable to see photos',
            desc: 'Riding in style with a piece of history!'
        },

        {
            id: 37,
            src: car10,
            category: 'cars',
            alt: 'Unable to see photos',
            desc: 'Restoring the past, one ride at a time. Classic cars forever!'
        },

        {
            id: 38,
            src: car11,
            category: 'cars',
            alt: 'Unable to see photos',
            desc: 'Born to race, built to thrill'
        },

        {
            id: 39,
            src: car12,
            category: 'cars',
            alt: 'Unable to see photos',
            desc: 'Preserving history, one ride at a time.'
        },

        {
            id: 40,
            src: car13,
            category: 'cars',
            alt: 'Unable to see photos',
            desc: 'A love affair with the open road!'
        },

        {
            id: 41,
            src: car14,
            category: 'cars',
            alt: 'Unable to see photos',
            desc: 'From classics to modern marvels—each ride tells a story!'
        },

        {
            id: 42,
            src: car15,
            category: 'cars',
            alt: 'Unable to see photos',
            desc: 'Fueling my passion for all things automotive! '
        },

        {
            id: 43,
            src: car16,
            category: 'cars',
            alt: 'Unable to see photos',
            desc: 'Fueling my passion for the classics, one road trip at a time!'
        },

        {
            id: 44,
            src: car17,
            category: 'cars',
            alt: 'Unable to see photos',
            desc: 'Each car has a personality—what\'s yours?'
        },

        {
            id: 45,
            src: car18,
            category: 'cars',
            alt: 'Unable to see photos',
            desc: 'Cruising through life one horsepower at a time!'
        },

        {
            id: 46,
            src: car19,
            category: 'cars',
            alt: 'Unable to see photos',
            desc: 'Cruising down memory lane in my classic beauty!'
        },

        {
            id: 47,
            src: car20,
            category: 'cars',
            alt: 'Unable to see photos',
            desc: 'Four wheels move the body; two wheels move the soul!',
        },

        {
            id: 48,
            src: tvl2,
            category: 'travel',
            alt: 'Unable to see photos',
            desc: 'Serene waters and beautiful landscapes'
        
        },

        {
            id: 61,
            src: tvl1,
            category: 'travel',
            alt: 'Unable to see photos',
            desc: 'Passport: my ticket to exploring the unknown!'
        
        },

        {
            id: 49,
            src: tvl16,
            category: 'travel',
            alt: 'Unable to see photos',
            desc: 'The entertainment capital of the world'
        
        },

        {
            id: 50,
            src: tvl10,
            category: 'travel',
            alt: 'Unable to see photos',
            desc: 'The city of love and lights'
        
        },

        {
            id: 51,
            src: tvl11,
            category: 'travel',
            alt: 'Unable to see photos',
            desc: 'A journey through ancient history'
        
        },

        {
            id: 52,
            src: tvl12,
            category: 'travel',
            alt: 'Unable to see photos',
            desc: 'Sparkling city lights'
        
        },

        {
            id: 53,
            src: tvl13,
            category: 'travel',
            alt: 'Unable to see photos',
            desc: 'Majestic mountains and pristine landscapes'
            
        
        },

        {
            id: 54,
            src: tvl14,
            category: 'travel',
            alt: 'Unable to see photos',
            desc: 'A glimpse into rich cultural heritage'
        
        },

        {
            id: 55,
            src: tvl15,
            category: 'travel',
            alt: 'Unable to see photos',
            desc: 'Memories made along the way'
        },

        {
            id: 56,
            src: tvl17,
            category: 'travel',
            alt: 'Unable to see photos',
            desc: 'Canada'
        
        },

        {
            id: 57,
            src: tvl18,
            category: 'travel',
            alt: 'Unable to see photos',
            desc: 'A blend of tradition and modernity'
        },

        {
            id: 58,
            src: tvl19,
            category: 'travel',
            alt: 'Unable to see photos',
            desc: 'Palm trees'
        
        },

        {
            id: 59,
            src: tvl20,
            category: 'travel',
            alt: 'Unable to see photos',
            desc: 'Celebrating moments together'
        
        },

        {
            id: 60,
            src: tvl6,
            category: 'travel',
            alt: 'Unable to see photos',
            desc: ' Nature\'s masterpiece'
        },

        {
            id: 62,
            src: art1,
            category: 'art',
            alt: 'Unable to see photos',
            desc: 'Finding beauty in the chaos'
        },

        {
            id: 63,
            src: art2,
            category: 'art',
            alt: 'Unable to see photos',
            desc: 'Colors speaking louder than words'
        },

        {
            id: 64,
            src: art3,
            category: 'art',
            alt: 'Unable to see photos',
            desc: 'Every stroke tells a story'
        },

        {
            id: 65,
            src: art4,
            category: 'art',
            alt: 'Unable to see photos',
            desc: 'Where imagination meets reality'
        },

        {
            id: 66,
            src: art5,
            category: 'art',
            alt: 'Unable to see photos',
            desc: 'Chasing the sun, one petal at a time'
        },

        {
            id: 67,
            src: art6,
            category: 'art',
            alt: 'Unable to see photos',
            desc: 'Just like a butterfly, I am learning to embrace change'
        },

        {
            id: 68,
            src: art7,
            category: 'art',
            alt: 'Unable to see photos',
            desc: ' Nature\'s masterpiece'
        },

        {
            id: 69,
            src: art8,
            category: 'art',
            alt: 'Unable to see photos',
            desc: 'Creativity takes courage'
        },

        {
            id: 70,
            src: art9,
            category: 'art',
            alt: 'Unable to see photos',
            desc: 'Chaos meets claws: the ultimate anti-hero duo!'
        },

        {
            id: 71,
            src: art10,
            category: 'art',
            alt: 'Unable to see photos',
            desc: 'With every strike, the spirit of the Flame Hashira burns brighter!'
        },

        {
            id: 72,
            src: art11,
            category: 'art',
            alt: 'Unable to see photos',
            desc: 'From cowardice to courage, he strikes like lightning!'
        },

        {
            id: 73,
            src: art12,
            category: 'art',
            alt: 'Unable to see photos',
            desc: 'Swordsmith'
        },

        {
            id: 74,
            src: art13,
            category: 'art',
            alt: 'Unable to see photos',
            desc: 'Tanjiro Kamado Drawing'
        },

        {
            id: 75,
            src: art14,
            category: 'art',
            alt: 'Unable to see photos',
            desc: 'Demon slayer'
        },

        {
            id: 76,
            src: art15,
            category: 'art',
            alt: 'Unable to see photos',
            desc: 'Dr. Stone'
        },

        {
            id: 77,
            src: art16,
            category: 'art',
            alt: 'Unable to see photos',
            desc: 'Baymax!'
        },

        {
            id: 78,
            src: art17,
            category: 'art',
            alt: 'Unable to see photos',
            desc: 'Lizard Drawing'
        },

        {
            id: 79,
            src: art18,
            category: 'art',
            alt: 'Unable to see photos',
            desc: 'Finn and Jake | Adventure\'s Time'
        },

        {
            id: 80,
            src: art19,
            category: 'art',    
            alt: 'Unable to see photos',
            desc: 'Turning up the heat with a fiery passion!'
        },

        {
            id: 81,
            src: art20,
            category: 'art',
            alt: 'Unable to see photos',
            desc: 'Sidd from Ice Age'
        },

        {
            id: 82,
            src: photo1,
            category: 'movies',
            alt: 'Unable to see photos',
            desc: 'Every adventure starts with a leap of imagination!'
        },

        {
            id: 83,
            src: photo2,
            category: 'movies',
            alt: 'Unable to see photos',
            desc: 'Three bears, one world, endless adventures!'
        },

        {
            id: 84,
            src: photo3,
            category: 'movies',
            alt: 'Unable to see photos',
            desc: 'Just another day of laughter and mayhem in Oggy\'s world!'
        },

        {
            id: 85,
            src: photo4,
            category: 'movies',
            alt: 'Unable to see photos',
            desc: 'With a gadget for every adventure, the future is just a wish away! '
        },

        {
            id: 86,
            src: photo5,
            category: 'movies',
            alt: 'Unable to see photos',
            desc: 'Join Shinchan for mischief and laughter, every day is a new adventure!'
        },

        {
            id: 87,
            src: photo6,
            category: 'movies',
            alt: 'Unable to see photos',
            desc: 'Every moment with Mr. Bean is a new adventure in hilarity!'
        },

        {
            id: 88,
            src: photo7,
            category: 'movies',
            alt: 'Unable to see photos',
            desc: 'Every heist is a work of art with the Pink Panther on the case!'
        },

        {
            id: 89,
            src: photo8,
            category: 'movies',
            alt: 'Unable to see photos',
            desc: 'Chasing laughs and chaos, it’s always a wild ride with Tom and Jerry!'
        },

        {
            id: 90,
            src: photo9,
            category: 'movies',
            alt: 'Unable to see photos',
            desc: 'Welcome to the wackiest show in town—where every character is a classic!'
        },

        {
            id: 91,
            src: photo10,
            category: 'movies',
            alt: 'Unable to see photos',
            desc: 'Living life the lazy way, one lasagna at a time!'
        },

        {
            id: 92,
            src: photo11,
            category: 'movies',
            alt: 'Unable to see photos',
            desc: 'Where heroes meet hilarity, get ready for the ultimate team-up!'
        },

        {
            id: 93,
            src: photo12,
            category: 'movies',
            alt: 'Unable to see photos',
            desc: 'Welcome to the wildest world where anything can happen—let the adventures begin!'
        },

        {
            id: 94,
            src: photo13,
            category: 'movies',
            alt: 'Unable to see photos',
            desc: 'Welcome to the lab where genius meets goofiness!'
        },

        {
            id: 95,
            src: photo14,
            category: 'movies',
            alt: 'Unable to see photos',
            desc: 'Summer days are for endless inventions and epic adventures!'
        },

        {
            id: 96,
            src: photo15,
            category: 'movies',
            alt: 'Unable to see photos',
            desc: 'Magic, mayhem, and interdimensional adventures await!'
        },

        {
            id: 97,
            src: photo16,
            category: 'movies',
            alt: 'Unable to see photos',
            desc: 'Unlocking the mysteries of Gravity Falls, one bizarre adventure at a time! '
        },

        {
            id: 98,
            src: photo17,
            category: 'movies',
            alt: 'Unable to see photos',
            desc: 'Hooked on friendship and underwater antics!'
        },

        {
            id: 99,
            src: photo18,
            category: 'movies',
            alt: 'Unable to see photos',
            desc: 'Set sail for the quirkiest adventures on the high seas! '
        },

        {
            id: 100,
            src: photo19,
            category: 'movies',
            alt: 'Unable to see photos',
            desc: 'Braving the bizarre and protecting his home, Courage proves that true bravery comes in all sizes!'
        },

        {
            id: 101,
            src: photo20,
            category: 'movies',
            alt: 'Unable to see photos',
            desc: 'From creepy caves to haunted houses, Scooby and the gang are always ready for a frightfully fun adventure! '
        },

    ]);

    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [filter, setFilter] = useState('all');

    const openPhoto = (photo) => {
        setSelectedPhoto(photo);
    };

    const closePhoto = () => {
        setSelectedPhoto(null);
    };

    const filterPhotos = (criteria) => {
        setFilter(criteria);
    };

    const filteredPhotos = photos.filter((photo) => {
        if (filter === 'all') return true;
        return photo.category.includes(filter);
    });

    return (
        <div className="photo-album">
            <header>
                <h1 className="title">My Photo Album</h1>
                <p>a photo album created by Rhea Mae D. Borromeo</p>
            </header>
            <div className="filter-buttons">
                <>
                    <button onClick={() => filterPhotos('all')}>All</button>
                </>
                <>
                    <button onClick={() => filterPhotos('foods')}>Foods</button>
                </>

                <>
                    <button onClick={() => filterPhotos('travel')}>Travel</button>
                </>

                <>
                    <button onClick={() => filterPhotos('art')}>Art</button>
                </>

                <>
                    <button onClick={() => filterPhotos('cars')}>Cars</button>
                </>

                <>
                    <button onClick={() => filterPhotos('movies')}>Movies</button>
                </>

            </div>

            <div className="photos">
                {filteredPhotos.map((photo) => (
                     <Photo key={photo.id} photo={photo} onClick={() => openPhoto(photo)} />
                ))}
            </div>

            {selectedPhoto && (
                <div className="fullscreen-modal" onClick={closePhoto}>
                    <span className="close" onClick={closePhoto}>&times;</span>
                    <img src={selectedPhoto.src} alt={selectedPhoto.alt} className="fullscreen" />
                </div>
            )}
        </div>
    );
};

export default PhotoAlbum;
