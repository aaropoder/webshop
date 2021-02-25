import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  items = [
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/1AgAAOSw1AlenrBJ/s-l225.webp',
      title:
        'Multi Jointed Fishing Lures Sinking Wobblers Swimbait Hard Bait 1Pc Crankbait',
      price: 3.78,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/R4EAAOSwh-1W3uHO/s-l225.webp',
      title:
        '30 x Gold Headed Nymphs Trout Fly Fishing Flies - Set 33J Size 8 10 12 14 16 18',
      price: 15.09,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/sWsAAOSwdh5evk8w/s-l225.webp',
      title:
        '50 Pcs Lures Bait Shrimp Fishing Simulation Luminous Prawn Saltwater Hooks',
      price: 10.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/EJ0AAOSwA3dYS-CH/s-l225.webp',
      title:
        '17X Worm Soft Fishing Baits Lure Lead Jig Head Hooks Simulation Lures Tackle UK',
      price: 6.5,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/a~cAAOSwB69fWzjR/s-l225.webp',
      title:
        '7PCS/Set Lead Metal Lure 7g 10g 15g 20g Spoon Bait Saltwater Jig Fishing Tackle',
      price: 13.31,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/XnUAAOSwqu9VOlWp/s-l225.webp',
      title:
        "Bullet Head Bodies, Brass, 5 or 10 for  Flying C's Fishing Lures 7g, 11g & 16g.",
      price: 15.23,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/xjoAAOSwajtgLXTl/s-l225.webp',
      title:
        'New Listingbass trout salmon fly fishing flies Spoons lures assortment lot',
      price: 20,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/iD4AAOSwFnJZeFwY/s-l225.webp',
      title:
        'Popular Mini Insect Cicada Shape Fishing Lures Bait Tackle Crankbait 4cm 2 Hooks',
      price: 1.94,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/yQoAAOSwnQtgLaUY/s-l225.webp',
      title:
        "New ListingRAPALA SHAD RAP 05's--- 5 DIFFERENT COLORED FISHING LURES",
      price: 1.25,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/JeIAAOSwqx5gLX6G/s-l225.webp',
      title: 'New ListingVintage COTTON CORDELL FISHING LURE',
      price: 3.6,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/dXgAAOSwZylgLYFB/s-l225.webp',
      title:
        'New ListingVintage Rebel Spoonbill Minnow 4 1/2” Deep Run FISHING TACKLE Lure GREAT COLOR',
      price: 9.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/oBYAAOSwfZpeZRah/s-l225.webp',
      title: 'Heddon Super Spook 7/8 oz Saltwater Fishing Lure',
      price: 9.39,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/3joAAOSwof5gLaYf/s-l225.webp',
      title:
        "New ListingRAPALA SNAP RAP 08's--- 5 DIFFERENT COLORED FISHING LURES",
      price: 5.5,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/D18AAOSwkVBgAQW4/s-l225.webp',
      title:
        '50pcs 2# 4# 6# 8# 10# Carbon Steel Hook Sea Fishing Hooks Sharpened Treble Hook',
      price: 4.23,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/mXgAAOSwTbFfQdWz/s-l225.webp',
      title:
        'Mini Crankbait Hard Fishing Lures Trolling Rattling Baits 5pcs/Lot Small Lure 2g',
      price: 4.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/iRUAAOSwGuJfHju0/s-l225.webp',
      title:
        'NEW Fishing Quick Knot Tool Hooks Tying Multi Function Fishing Tackle Safety',
      price: 2.98,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/FkoAAOSw3ZFfoGiC/s-l225.webp',
      title:
        '100Pcs TPR Hair Rig Fishing Boilie Stops Dumbell Bait Rig Carp N5E9',
      price: 0.77,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/mnUAAOSwkq9dGzH9/s-l225.webp',
      title:
        '10PCS Fishing Lures Metal Spinner Baits Bass Tackle Crankbait Trout Spoon Trout',
      price: 8.97,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/klkAAOSwJTNgJEK4/s-l225.webp',
      title: 'New ListingSalmon Fly Fishing, Sunray Shadows 6.',
      price: 10.39,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/RmkAAOSwfcZgJENO/s-l225.webp',
      title: 'New ListingSalmon Fly Fishing, Sunray Shadows 7.',
      price: 10.39,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/nyEAAOSwP35fLL0n/s-l225.webp',
      title:
        '10 Bearings Spinning Reel Mini Ice Fishing Rock Lure Fishing Tackle Silver H1',
      price: 14.41,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/a3sAAOSwJ61gLYGM/s-l225.webp',
      title:
        'New ListingVintage Rebel Spoonbill Minnow 4 1/2” Deep Run FISHING TACKLE Lure GREAT COLOR',
      price: 9.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/xCMAAOSwqNxdu~zQ/s-l225.webp',
      title:
        '100pcs/set Strong Treble Fishing Hooks Fishing Anchor Hooks Big Game Tackle Hook',
      price: 2.08,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/GG8AAOSweR9fv7oF/s-l225.webp',
      title:
        'New Listing5PCS Fishing Lures Crankbait Wobblers With 10# Hooks Artificial Swimbait Peche',
      price: 6.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/oZQAAOSwGaRgJD~n/s-l225.webp',
      title: 'New ListingSalmon Fly Fishing,  Sunray Shadow Tube Flies 4.',
      price: 10.39,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/4qUAAOSw0xpgJD9f/s-l225.webp',
      title: 'New ListingSalmon Fly Fishing,  Sunray Shadow Tube Flies 3.',
      price: 10.39,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/mgAAAOSwFKVgLW2p/s-l225.webp',
      title: 'New ListingFishing lures lot of 12 used some salmon plugs ',
      price: 1.98,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/HoAAAOSwYvpgJ1de/s-l225.webp',
      title:
        'New ListingBINGO VINTAGE FISHING LURE  SUPER  S 12S (5”) DOUG ENGLISH   BINGO BAIT  IN BOX',
      price: 30,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/7v4AAOSw0PNgJD4N/s-l225.webp',
      title: 'New ListingSalmon Fly Fishing,  Sunray Shadow Tube Flies 1.',
      price: 14.55,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/RDcAAOSweMdgJEBz/s-l225.webp',
      title: 'New ListingSalmon Fly Fishing,  Sunray Shadow Tube Flies 5.',
      price: 14.55,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/YAwAAOSwTWRf~6Vb/s-l225.webp',
      title: 'New ListingRapala & more fishing lures lot of 5, New in box!',
      price: 17.7,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/VB8AAOSwBDRgLaaW/s-l225.webp',
      title:
        "New ListingRAPALA X-RAP 12 & SXR12's---3 with 2 COLORED FISHING LURES",
      price: 3.25,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/aDMAAOSw7sRgLDL1/s-l225.webp',
      title: '5 Vintage Fishing Lures',
      price: 14.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/5H0AAOSwE5JgBveD/s-l225.webp',
      title:
        'New Listing50pcs Fishing Lure Soft Artificial Swimbait Tail Grub Worms Moggot Bait Fishing',
      price: 0.01,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/QeYAAOSwby1enQVH/s-l225.webp',
      title:
        'New Listing100  -  3"  Fisherrman\'s Choice  RED Scented  Grubs BASS-WALLEYE-CRAPPIE FISHING',
      price: 14.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/ihwAAOSwibZgBbDr/s-l225.webp',
      title:
        'New Listing3x Purple/Black Intruder Salmon Steelhead Fishing Flies',
      price: 18.01,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/SBMAAOSw-9hch0Ip/s-l225.webp',
      title:
        '20pcs Real Minnow Bait Drop Shot LRF Soft Fishing Lure - Perch/Pike/Chub UK',
      price: 3.87,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/bjcAAOSwB65fxFdo/s-l225.webp',
      title:
        'New Listing1PCS Minnow Fishing Lure Crankbaits Wobble Plastic Hard Bait Pesca 7"-18CM',
      price: 0.01,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/5fIAAOSw6dtdtpjv/s-l225.webp',
      title: 'Diem Mens Lite Tech Boots Fishing Lace Up Waterproof Pattern',
      price: 34.62,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/LS0AAOSwEwpejjPI/s-l225.webp',
      title:
        'Soft Worms Fishing Lures Artificial 5cm/1g Carp Fishing Baits Set New 50pcs/lot',
      price: 8.96,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/k3AAAOSwKSNdo3Ys/s-l225.webp',
      title:
        'New Listing3x Fishing Lure Vintage Tomic Salmon Plug Made in Canada. ',
      price: 28,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/BCEAAOSwREZfAJo9/s-l225.webp',
      title:
        'New Listing1PCS Minnow Fishing Lures Sea Fishing Tackle 14cm-5.51"/23g-0.81oz Saltwater',
      price: 0.75,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/y6IAAOSwGJddebBN/s-l225.webp',
      title:
        'New ListingIrideus Craw Diddy Soft Hackle Wooly Bugger Streamer Fly Fishing Flies ',
      price: 9.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/HkAAAOSwkIJfhb5M/s-l225.webp',
      title:
        'New ListingAcme Little Cleo 1/4 oz Fishing Lure Spoon Plain Treble Hook Gold',
      price: 7.9,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/rhsAAOSwpMpgCJnc/s-l225.webp',
      title: '3 x 40gm SEA FISHING SILVER MINNOW LURES mackerel SPINNERS ',
      price: 10.25,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/3A4AAOSwl3tdhEA0/s-l225.webp',
      title:
        'New Listing1PC Metal Jig 20g Vertical Jigging Butterfly Lead Fish Bait Hook Freshwater',
      price: 3.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/Yb0AAOSwaRFgLb2F/s-l225.webp',
      title: 'New Listing# F336 UNBRANDED CRANKBAIT FISHING LURE',
      price: 6.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/gLcAAOSwyWZf9Z5H/s-l225.webp',
      title:
        'New Listing[JB] 4pcs Solve Soft Bass Bait Frog Crankbait Top Water Baits Fishing Hook',
      price: 10.02,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/XKcAAOSwURJgLaVr/s-l225.webp',
      title:
        "New ListingRAPALA ORIGINAL FLOATING 07's--- 5 DIFFERENT COLORED FISHING LURES",
      price: 1.25,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/LwQAAOSw1y5gFaYZ/s-l225.webp',
      title: 'New Listing24 Hares Ear Nymphs  - Fly Fishing Flies',
      price: 13.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/DUwAAOSwvedgJBND/s-l225.webp',
      title: 'New ListingSalmon Fly Fishing, Fish Skull Sunray Shadow.',
      price: 14.55,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/AWIAAOSws5NgBa~h/s-l225.webp',
      title: 'New Listing3x Fuchsia Intruder Salmon Steelhead Fishing Flies',
      price: 18.01,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/yqgAAOSwCnpcfP4w/s-l225.webp',
      title:
        'Fiiish Black Minnow № 1 7 cm. Fishing, Pike Lures, Rubber Fish, Trout, Perch.',
      price: 13.12,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/lyQAAOSwv4xf6Onb/s-l225.webp',
      title:
        'New Listing2x   Fishing lures , Rapala Team Esko TE-07 ,  Special. ',
      price: 36,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/zyIAAOSwcAlf5jzp/s-l225.webp',
      title:
        'New Listing3x  Vintage  Fishing Lure Nils Master Invincible  15 cm, Made in Finland,  ',
      price: 74,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/lRkAAOSwy~JfxwFi/s-l225.webp',
      title:
        '5/10pcs Fly Fishing Flies Poppers Jigs Lures #6 #8 Hooks Trout Panfish Bass',
      price: 10.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/7~AAAOSwjW5bcPu8/s-l225.webp',
      title:
        '30pcs Mixed Metal Fishing Lures Spinner Baits Spoon Fishing Baits Hooks Kits',
      price: 13.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/ZQgAAOSwkl5XdeW-/s-l225.webp',
      title:
        '15.5cm 6-1/8inch Lot 10 Minnow Fishing Lures Floating Rattles Bass CrankBait 16g',
      price: 11.1,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/vdkAAOSw46ZgLiMD/s-l225.webp',
      title:
        'New Listing1Pc Crank 3D Eyes Fishing Lure Hard Bait Bass Crankbait Sharp Fish Hooks Tackle',
      price: 6.47,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/yC0AAOSw7kxdLKSy/s-l225.webp',
      title: 'Smith AR-S 6 g various colors Trout Spinner ',
      price: 9.9,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/FEwAAOSw5G9d4Qo2/s-l225.webp',
      title:
        'Lot 30pcs Trout Spoon Metal Fishing Lures Spinner Baits Bass Tackle Tool Kits US',
      price: 13.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/RecAAOSwkqZgCyQw/s-l225.webp',
      title:
        'New Listing2x Fishing Lure Rapala Barra Magnum 11cm ,  BMAG-11,   CG, SFC  , RARE',
      price: 52,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/VkkAAOSws9VgE6lm/s-l225.webp',
      title:
        '10x Luminous Squid Jig Fishing Shrimp Lure Cuttlefish Hook Rig Fishing Bait',
      price: 14.12,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/7IwAAOSwQJhUgXO4/s-l225.webp',
      title:
        '10pcs Unpainted Crankbait Fishing Lure Body 6 1/3 Inch 1/2 OZ Blank lures 9#',
      price: 8.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/OcIAAOSwJeBgLcqu/s-l225.webp',
      title:
        'New Listing50 Soft Plastic Fishing Lure Tackle 50mm Paddle Tail Grub Worm bream lures HU',
      price: 5.57,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/8r4AAOSw3bxbB~mK/s-l225.webp',
      title:
        '20 Pcs Black Zonker Streamers Trout Fly Fishing Flies Lures With Free Fly Box',
      price: 11.69,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/7cMAAOSwc~NbNi1z/s-l225.webp',
      title:
        'RED GILL FLASHER - SILVER PEARL 70mm ( 2.75" ) - 4pcs- SEA FISHING LURE',
      price: 5.61,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/g60AAOSwy11f4iqG/s-l225.webp',
      title:
        '50PCS Fishing Lure Promotion Hooks 2cm Maggot Grub Soft Smell Worms Glow Shrimps',
      price: 5.95,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/xrgAAOSwwUhgJ2UH/s-l225.webp',
      title:
        'New Listing5pcs LUSHAZER Spinner Spoon Fishing Lure Hard Baits Sequins with Feather',
      price: 7.79,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/h9EAAOSwnL1gLfwA/s-l225.webp',
      title:
        'New ListingArtificial Large Fishing Saltwater Freshwater Deep Sea Minnow CrankBait Lure ',
      price: 7.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/p0UAAOSw91NgLemV/s-l225.webp',
      title: 'New Listing# F316  RAPALA SHAD CRANKBAIT FISHING LURE',
      price: 2.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/2BkAAOSwmLlX2tGt/s-l225.webp',
      title:
        '10 Blank Crankbait Fishing Lure Bodies Square Bill Unpainted Lure UPHC15',
      price: 10,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/nzwAAOSw0zRgLPIO/s-l225.webp',
      title: 'New Listing1pcs VIB Fishing Lure Lead SWIM MINNOW Wobbler',
      price: 13.24,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/FL8AAOSwKk9fQox-/s-l225.webp',
      title:
        'New Listing24 Bead Head Black Zebra Midge Nymphs  - Fly Fishing Flies',
      price: 11.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/CkQAAOSwwRFe--YH/s-l225.webp',
      title:
        'Lot 50pcs Octopus Fishing Hook High carbon steel Saltwater Bass hooks 1#-10/0#',
      price: 14.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/3eMAAOSwQ3hgLY2q/s-l225.webp',
      title:
        'New Listing3  Hot N Tot Thin Fin Fishing Lures Used in Very Good Condition',
      price: 5,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/AKQAAOSwq9Bfei1v/s-l225.webp',
      title:
        'NEW! Abu Garcia Toby Spoon *FULL RANGE* Sea Predator Pike Fishing Lures',
      price: 6.23,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/pHsAAOSwfRdZOFLY/s-l225.webp',
      title:
        'SOFT PLASTIC FISHING LURE MAKING KIT PLASTISOL 5" SWIM BAITS non std colors',
      price: 66.92,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/ht0AAOSwgxpfT2QM/s-l225.webp',
      title:
        '9cm Artificial Frog Topwater Soft Fishing Lure Crankbait Hooks Bass Bait Tackle',
      price: 4.84,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/zCYAAOSws19Zfyd8/s-l225.webp',
      title:
        'Assorted Lummies Glow In The Dark Buzzers Trout Fly Fishing Flies 10 25 50 100',
      price: 50.28,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/FfkAAOSwIwlgLd0C/s-l225.webp',
      title:
        'New Listing# F363  LOT OF 2 FLOATING HARD CRICKET TOPWATER FISHING LURES',
      price: 3.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/~QwAAOSwSuNdj81A/s-l225.webp',
      title:
        'New Listing24 Tungsten Bead Head Red Zebra Nymphs  - Fly Fishing Flies',
      price: 17.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/j8IAAOSwI8VffhQZ/s-l225.webp',
      title:
        'Multi Jointed Robotic Wobbler Fishing Lures 4 Segments Swimbait Electric Bait',
      price: 40.7,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/JwQAAOSwDHtf6VXG/s-l225.webp',
      title:
        '16 x Trout & Redfin Fishing Spinner Lures, Perch, Bass, Yellowbelly Spinners',
      price: 16.7,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/oS4AAOSwaCBgLdmM/s-l225.webp',
      title: 'New Listing# F379  LOT OF 3 SMALL TROUT SPINNER FISHING LURES',
      price: 2.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/unAAAOSwB5tgLdoM/s-l225.webp',
      title: 'New Listing# F383  LOT OF 6 SMALL TROUT SPINNER FISHING LURES',
      price: 2.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/W0YAAOSwmIxfGQQg/s-l225.webp',
      title:
        '6pcs/Lot 7cm/6g Fishing Lures Jerkbait\tCrankbaits Minnow Hooks Bait Bass Tackle',
      price: 7.5,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/kz0AAOSwgjtgLeFX/s-l225.webp',
      title:
        'New Listing# F323  BILL DANCE BOMBER LONG A 15A  RATTLING, TOPWATER FISHING LURE',
      price: 3.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/p4kAAOSwjcVgBdET/s-l225.webp',
      title:
        'New ListingCotton Cordell (Lot Of 3) Bait Bonanza Lipless Crankbaits, Bass Fishing, (NWT!)',
      price: 20,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/3I8AAOSwjIpgLhkL/s-l225.webp',
      title:
        'New Listing10pcs Plastic Soft Lure Bass Grubs T-Tailed Fishing Worm Bait Artificial Tackle',
      price: 3.29,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/EPoAAOSwgC5gLL9a/s-l225.webp',
      title:
        'New Listing6pcs Pencil Plastic Fishing Lure 9cm 20g 3D Eyes Full Swimming Layer Baits',
      price: 12.89,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/OWAAAOSwhIRgIFfz/s-l225.webp',
      title:
        'New Listing6 Tungsten Bead Head Rust Balanced Leech  - Fly Fishing Flies',
      price: 8.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/JYIAAOSwFwlgAyli/s-l225.webp',
      title:
        'New Listing6 Tungsten Bead Head Blood Balanced Leech  - Fly Fishing Flies',
      price: 8.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/CvsAAOSwl1dgLfyM/s-l225.webp',
      title:
        'New ListingHard Fishing Lures Spoon Hook Metal Spinner Tackle Lures Baits Bass 5g-20g',
      price: 6.18,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/wP8AAOSweFlgLcNY/s-l225.webp',
      title: "New Listing# F368 JOHNSON'S SILVER MINNOW SPOON FISHING LURE",
      price: 2.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/uCQAAOSwyf9gLXjx/s-l225.webp',
      title: 'New ListingJoes Hopper Fly Fishing Dry Trout Flies Size 10',
      price: 5.96,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/gmAAAOSwHYBgLhLp/s-l225.webp',
      title:
        'New Listing2 in 1 Spinning Fish Drop Shot Set Rubber Fish Set with Hooks Offset Jig Heads',
      price: 6.3,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/qYQAAOSwOsZgLhqd/s-l225.webp',
      title:
        'New Listing10PCS/Pack Soft Rubber Paddle Tail Cannibal Shads Fishing Lure Fish Baits',
      price: 4.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/exsAAOSweFlgLXuA/s-l225.webp',
      title:
        'New Listing100PCS Lure Silicone Crank 50mm Lures Bait Fish Soft Lobste Baits Tackle Fishing',
      price: 29.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/27kAAOSwC~pgLigQ/s-l225.webp',
      title:
        'New ListingGear 8cm/2g Silver Soft Shrimp Worms Fish Lure Maggot Fishing Bait Jig Head',
      price: 4.9,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/vW4AAOSwR0JUOt~k/s-l225.webp',
      title:
        'Mepps Syclops Fishing Spoon. Different colors and sizes!. BRAND NEW',
      price: 7.34,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/NOEAAOSwvaJgLej9/s-l225.webp',
      title: 'New Listing# F328  RAPALA DT10 CRANKBAIT FISHING LURE',
      price: 4.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/nzwAAOSw0zRgLPIO/s-l225.webp',
      title: 'New Listing1pcs VIB Fishing Lure Lead Swim Minnow Wobbler Hard',
      price: 13.24,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/K64AAOSw9j9doZ5W/s-l225.webp',
      title:
        "New ListingGARY YAMAMOTO ''SENKO 4'' Custom Baits Soft Silicon Lures Bass Fishing 10pcs",
      price: 9.95,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/oL8AAOSwUHldoZlE/s-l225.webp',
      title:
        "New ListingGARY YAMAMOTO ''SENKO 6'' Custom Baits Soft Silicon Lures Bass Fishing 5pcs",
      price: 9.95,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/FYAAAOSwnrlc7U4b/s-l225.webp',
      title:
        '5pcs/lot Luminous Shrimp Squid Octopus Bait Fishing Jigs Hook Lures 10cm 8g Bait',
      price: 5.13,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/SeAAAOSwHYBgLedr/s-l225.webp',
      title: 'New Listing# F318  RAPALA DT4 CRANKBAIT FISHING LURE',
      price: 3.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/-BIAAOSwq7tgBa41/s-l225.webp',
      title:
        'New Listing3x Shrimp/Orange Intruder Salmon Steelhead Fishing Flies',
      price: 18.01,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/-KAAAOSwgQJgLees/s-l225.webp',
      title: 'New Listing# F319  RAPALA DT6 CRANKBAIT FISHING LURE',
      price: 2.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/9MYAAOSwcvFgLeh2/s-l225.webp',
      title: 'New Listing# F320  RAPALA DT6 CRANKBAIT FISHING LURE',
      price: 3.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/t6EAAOSwlkBgLejC/s-l225.webp',
      title: 'New Listing# F317  RAPALA DT6 CRANKBAIT FISHING LURE',
      price: 3.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/vhAAAOSwn99doIJC/s-l225.webp',
      title:
        "New ListingGARY YAMAMOTO ''FAT IKA 4'' Custom Baits Soft Silicon Lures Bass Fishing 10pcs",
      price: 14,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/cYIAAOSwF~hb1We1/s-l225.webp',
      title: '1 dozen (12) - Woolly Bugger - BLACK - Bead Head',
      price: 7.14,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/Y9QAAOSwYxFf2gbm/s-l225.webp',
      title:
        'New ListingFIIISH BLACK MINNOW 200mm No.6 Silicon Spinning Jigging Boat Fishing 30g-240g',
      price: 70,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/~MoAAOSwEbhgLhGX/s-l225.webp',
      title:
        'New Listing5x Wobblers Goldfish Fishing Lure 16.5g 6cm Hard Artificial Fish Baits Crankbait',
      price: 18.01,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/XCcAAOSwymhgLcJR/s-l225.webp',
      title:
        'New Listing5pcs/pack Bionic Plastic Fishing Lure Insect Locust Lure Hard Bait Hook @',
      price: 8.88,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/fU8AAOSwcJRgFQTO/s-l225.webp',
      title:
        'New ListingLure FISH Deps Basirisky 70 Soft Crawler Bait Topwater Bass Fishing 2 Pieces Set',
      price: 49.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/iP4AAOSwPkJadryh/s-l225.webp',
      title:
        '7 Colors Assorted Zonker Streamers Trout Fly Fishing Flies Lures Fly Set-Size #6',
      price: 6.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/6zgAAOSwsAVgKhxa/s-l225.webp',
      title:
        'New Listing40pcs/Box Trout Fly Fishing Lure Dry Wet Flies Nymphs Fish Artificial Bait',
      price: 18.5,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/aPMAAOSwQ6ZfxgIR/s-l225.webp',
      title:
        '5PCS/Pack Phantom Spider 8cm/7g Topwater Bait Soft Rubber Fishing Lure Tackle',
      price: 10.26,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/DE0AAOSwsTxgLaqa/s-l225.webp',
      title: 'New ListingLOT OF 5 Rebel Frog-R Bull Frog Fishing Lures SAVE',
      price: 9.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/mJsAAOSwB6JgLe~X/s-l225.webp',
      title:
        'New Listing2 Pieces Fishing Bait Metal Sequins Hard   Jigging Lure Artificial Bait',
      price: 8.87,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/2V0AAOSwj7Zdem9I/s-l225.webp',
      title:
        'New ListingIrideus Epoxy Trout flies fly fishing Minnow Baitfish Steelhead pond smelt',
      price: 9.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/rrYAAOSwRlFdDJW5/s-l225.webp',
      title:
        'New Listing3x Gaula Green Templedog 2" Conehead Salmon Fishing Flies',
      price: 18.01,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/qoAAAOSwrhBZD1kf/s-l225.webp',
      title:
        'New Listing3x Underghillie 1/4" Copper Tube Salmon Fishing Flies NEW',
      price: 16.63,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/oZEAAOSwjL5ZEiKM/s-l225.webp',
      title:
        'New Listing3x Phatagorva Templedog 1.5" Conehead Salmon Fishing Flies',
      price: 18.01,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/1RAAAOSwUNZgKOb-/s-l225.webp',
      title:
        'New Listing5pcs Popper Fishing Lures 5 Colors 10g Bait High Carbon Steel Hook Tackle @T',
      price: 9.48,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/loUAAOSwhLNgLdit/s-l225.webp',
      title:
        'New Listing# F381  LOT OF 10 SPINNER FISHING LURES, ROOSTER TAIL, CP SWING, TAIWAN',
      price: 7.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/gwkAAOSwxjZgLb-B/s-l225.webp',
      title: "New Listing# F333 MANN'S 1 MINUS CRANKBAIT FISHING LURE",
      price: 7.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/3rkAAOSw69FfxzYd/s-l225.webp',
      title:
        '5Pcs Crank Lure Kit Crank Baits 4.5cm Deep Swim Wobblers Hard Fishing Tackle',
      price: 6.91,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/tscAAOSwvWNgFqds/s-l225.webp',
      title:
        'Salmo Slider Sinking 5 7 10 12 16 cm Lures Jerkbait Fishing Lures Predator Fishing',
      price: 14.43,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/TrIAAOSwbgNgLcuo/s-l225.webp',
      title:
        'New Listing10pcs Paillette Metal Fishing Lures Sequins Spinner Artificial Swimbaits',
      price: 10.05,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/6DcAAOSwhlZYs5SF/s-l225.webp',
      title:
        'Deep sea Big Fishing soft Replica Fish Lure Baits Treble Hook 30cm/372g',
      price: 19.79,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/kLcAAOSwaXpb2Jae/s-l225.webp',
      title: '1 dozen (12) - Copper John - RED - Bead Head',
      price: 7.14,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/Nx8AAOSwi-pgCUzq/s-l225.webp',
      title:
        'New ListingTen 10 Dolphin Bomber STYLE Rattling fishing lure deep diver Pike walleye bass',
      price: 22.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/-fAAAOSwAeNcyauD/s-l225.webp',
      title:
        'New ListingLOLLIPOP LURES "TENZO SPARKLE" Livebait Zoka Jig Boat Sea Fishing',
      price: 13.5,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/JSUAAOSwvZRgLd7B/s-l225.webp',
      title:
        'New Listing2 in 1 Spinning Fish and Drop Shot Set Rubber Fish with Hook and Offset Jig Head',
      price: 8.12,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/kWMAAOSwBVRfO72B/s-l225.webp',
      title:
        'New ListingSoft Frog Lure 6cm 16g Snakehead Bait Topwater Simulation Lures Fishing',
      price: 5.92,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/nBEAAOSw-tZgLfyR/s-l225.webp',
      title:
        'New Listing5 Pcs Artificial Baits Soft Fishing Lures T Tail Fish Swimbaits without Hook',
      price: 9.22,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/bzIAAOSwvaNgLWhf/s-l225.webp',
      title:
        'New ListingStanley Jigs 7/16oz 1/8oz Mini-Shad Made in America Fishing Lure bait',
      price: 9.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/fXoAAOSwPFhgLf5q/s-l225.webp',
      title:
        'New Listing15pcs Fishing Hook Weight Savage Cannibal Shads Perch Pike Lure Drop Shot Baits',
      price: 10.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/04QAAMXQiM5Q~ngH/s-l225.webp',
      title:
        'New ListingIrideus Custom Biscuit Pheasant Tail Nymph Trout Fly Fishing Flies Steelhead ',
      price: 9.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/DFsAAOSwS35ZdJru/s-l225.webp',
      title:
        'New Listing3x Spring Ghillie 1.5" Copper Tube Salmon Fishing Flies',
      price: 16.63,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/it0AAOSwLSZcIvvB/s-l225.webp',
      title:
        '2pcs Metal Jig Bag Vertical Knife Saltwater Fishing Offshore 9 Pocket Storage ',
      price: 15.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/-qgAAOSww9BgLhqf/s-l225.webp',
      title:
        'New Listing50pcs Glitter Savage Soft Worm Shads Chub Perch Pike Fish Fishing Lure Baits',
      price: 4.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/GWwAAOSwz5JgLctd/s-l225.webp',
      title:
        'New Listing5x LEO Flies Fly Fishing Lure Jig Hook False Bait w/Crank Fishhook (Green)',
      price: 6.44,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/RfAAAOSwTSlgLdm-/s-l225.webp',
      title:
        'New Listing10x Octopus Squid Fishing Lures Fishing Tackle Squid Lures Fishing Bait 7cm',
      price: 9.45,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/QyUAAOSwbuFgLctk/s-l225.webp',
      title:
        'New Listing11cm 16g Sinking Crankbait Fishing Lures Panfish Hard Crank Swimming Bait ',
      price: 8.08,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/4ocAAOSwOxFgEX7X/s-l225.webp',
      title:
        'New ListingFishing Fly Paper Weight Salmon Fly Silver Doctor By J Black',
      price: 2.77,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/cy8AAOSwe2ZbqgM8/s-l225.webp',
      title:
        '8pcs/lot Ice Fishing Jigs Lure Winter Glow Spoon Minnow Luminous Jigging Bait ',
      price: 10.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/XZwAAOSwxeNgLgKx/s-l225.webp',
      title:
        'New ListingArtificial Saltwater Freshwater Pike Bass Muskie Mouse Swimbait Crankbait Lure ',
      price: 13.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/rMIAAOSwU7JeARIK/s-l225.webp',
      title:
        'New Listing24 Tungsten Bead Head Black Zebra Midge Nymphs Size 22  - Fly Fishing Flies',
      price: 17.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/ldsAAOSw29xgLctx/s-l225.webp',
      title:
        'New ListingElectric Fishing Lure with Treble Hook Long Cast Artificial Fishing Baits',
      price: 15.47,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/s1kAAOSwYj9b5EBx/s-l225.webp',
      title:
        '12 pcs Polar Fry Slowly Sinking Salmon Trout Steelhead Minnow Fly Fishing Flies',
      price: 8.38,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/mmwAAOSw~W9fBsHK/s-l225.webp',
      title:
        '8pcs 13.3cm/14g Trolling Bait Crank Minnow Lures Bass Crankbaits Fishing Tackle',
      price: 14.5,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/DRAAAOSwLN5ex6BS/s-l225.webp',
      title:
        'New Listing3x Black Doctor Templedog 1" Copper Tube Salmon Fishing Flies NEW',
      price: 18.01,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/hHcAAOSwxeNgLh61/s-l225.webp',
      title:
        'New Listing2 in 1 Spinning Fish Drop Shot Set Rubber Fish Set with Hooks Offset Jig Heads',
      price: 5.02,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/w94AAOSw169fXJNd/s-l225.webp',
      title:
        '6 pcs UV Orange Surface Seaducer Frog Foam Head Popper Bass Fly Fishing Flies',
      price: 10.49,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/TmQAAOSwLt5e7Lff/s-l225.webp',
      title:
        'New Listing50cm/7g Minnow Lures Sinking Swimbait Artificial Pesca Wobblers Fishing Best',
      price: 3.42,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/~b0AAOSw6~Jex8xR/s-l225.webp',
      title:
        'New Listing3x Cascade Monkey 3/4"" Conehead Tube Salmon Fishing Flies NEW',
      price: 16.63,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/A0oAAOSw42dZE2-U/s-l225.webp',
      title:
        'New Listing3x Mega Monkey Wing 6" - 1" Copper Tube Salmon Fishing Flies',
      price: 16.63,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/QhwAAOSwybZfRicK/s-l225.webp',
      title:
        'New Listing10 PCS green olive worm larva Fly Fishing flies #8 W/ Free Box D605',
      price: 4.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/VuUAAOSwvPpgLesP/s-l225.webp',
      title: 'New Listing# F324  RAPALA DEEP DIVER CRANKBAIT FISHING LURE',
      price: 3.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/w6cAAOSwDwJdKHnI/s-l225.webp',
      title:
        'Yo-zuri L-Jack Magnum Trolling Saltwater Fishing Lure 130mm 28g Sinking R185',
      price: 14.39,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/Jn4AAOSwsLdfrPSZ/s-l225.webp',
      title:
        'Soft Spider Bait Plastic Fishing Lures Treble Hooks Emulation Topwater Fish Tool',
      price: 4.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/gEUAAOSwSdZWcnVS/s-l225.webp',
      title:
        '24 Pcs Top Quality Hair Wing Salmon Flies Trout Fly  Saltwater Fly Fishing Lures',
      price: 11.9,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/NjsAAOSwBlhfwGr3/s-l225.webp',
      title:
        '10pc Plastic Minnow Fishing Lures Crank Bait Hooks Bass Crankbaits Hook 8g/9.2cm',
      price: 13.76,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/cx8AAOSwqHNgLe~P/s-l225.webp',
      title:
        'New Listing4Pcs Jig Head Lead Head Lure 10cm/9.3g Soft 3D Eyes Fishing Lures Bass Baits',
      price: 8.33,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/nb8AAOSweohfThm-/s-l225.webp',
      title: 'Savage Gear 3D Suicide Duck Lures  Catfish Fishing Tackle',
      price: 11.09,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/~WYAAOSwoYZfaEfB/s-l225.webp',
      title:
        'New Listing5Pcs Fishing Lure Outdoor Fishing Simulation Frog Topwater Bait Fishing F3H3',
      price: 9.04,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/dVYAAOSwH5dgLd2j/s-l225.webp',
      title:
        'New ListingPortable Durable Ice Fishing Rod Tip-up Compact Orange Flag Tackle Accessories',
      price: 7.94,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/V8QAAOSwWxNYoyIy/s-l225.webp',
      title:
        ' French Spinner Blade,  Fishing Lures Nickel & Brass Hammered Finish Size 1-5 .',
      price: 18,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/DZsAAOSwRPBdLKUH/s-l225.webp',
      title: 'Smith AR-S 4.5 g various colors Trout Spinner ',
      price: 9.3,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/V28AAOSwfEVex87K/s-l225.webp',
      title:
        'New Listing3x Editor Sunray Shadow 1.5" Aluminium Tube Salmon Fishing Flies NEW',
      price: 16.63,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/qW8AAOSwiCRUht2U/s-l225.webp',
      title:
        'Grasshopper Fishing Flies, 12  Brown, Green & Banded, Size 8/10/12, Fly Fishing',
      price: 8.3,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/lKkAAOSwSBpfo8Ho/s-l225.webp',
      title:
        'Megabass MARINE GANG 120 F 12cm 20g Fishing Lures (Choice Of Colors)',
      price: 21.9,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/5lcAAOSwLEJgLcu1/s-l225.webp',
      title:
        'New Listing5pcs 3D Frog Fishing Lure Soft Artificial Swimbait Fish Tackle with Box',
      price: 11.3,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/QhkAAOSwuBdgK4bD/s-l225.webp',
      title:
        "VERY RARE VINTAGE WOOD'S--MINI MINNOW--BASS, PIKE,, SALMON FISHING LURE",
      price: 7.62,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/t3YAAOSwPKNgLeBC/s-l225.webp',
      title:
        'New ListingSilicone 8cm/2g Gear Soft Shrimp Maggot Fishing Bait Jig Head Worms Fish Lure',
      price: 5.14,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/SisAAOSwt81gLMcS/s-l225.webp',
      title:
        'New Listing5x 3D Eyes Metal VIB Fishing Lures Artificial Hard Bait Fishing Accessories',
      price: 9.72,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/HxsAAOSwDJ5gLeoV/s-l225.webp',
      title: 'New Listing# F338  RAPALA FAT RAP IRELAND CRANKBAIT FISHING LURE',
      price: 4.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/cB0AAOSw4sVgLex~/s-l225.webp',
      title:
        'New Listing# F342  RAPALA DEEP RUNNER 9 FINLAND CRANKBAIT FISHING LURE',
      price: 5.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/7wMAAOSwK2xgLeu2/s-l225.webp',
      title:
        'New Listing# F337  RAPALA FINLAND DEEP RUNNER CRANKBAIT FISHING LURE',
      price: 4.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/dLgAAOSwOnVgLewf/s-l225.webp',
      title:
        'New Listing# F343  RAPALA DEEP RUNNER 8 FINLAND CRANKBAIT FISHING LURE',
      price: 4.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/nM8AAOSwvWtgLUSw/s-l225.webp',
      title:
        'New Listing12 PACK Silverbrook Viva Booby Lure Fly Sz 10 Trout Fishing Flies',
      price: 13.84,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/OnMAAOSw8kFgLdm4/s-l225.webp',
      title:
        'New Listing40pcs/lot Fishing Flies Fly Fishing Lure Wet High Simulation Insects',
      price: 18.18,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/okYAAOSwQpZgLcEO/s-l225.webp',
      title: 'New Listing# F389 ARBOGAST MUD BUG CRANKBAIT FISHING LURE',
      price: 2.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/Bf4AAOSwz6tf1LF4/s-l225.webp',
      title: 'New ListingEggstasy Egg Flies x 10 BARBLESS',
      price: 13.84,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/TpIAAOSwRVpgLZex/s-l225.webp',
      title:
        'New ListingStrike King Crankbait Rattler Gold Black Diver 2-3/4” Bass Fishing Lure',
      price: 7.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/4t8AAOSwiN9awOvV/s-l225.webp',
      title:
        'Trout Worm Earthworm Sea Fishing Soft Lures Tackle Baits 8cm Mulitcolour',
      price: 16.61,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/XpMAAOSwDr9fn04D/s-l225.webp',
      title: 'New ListingFishing Lure -Shad Dancer 05',
      price: 3,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/ZZIAAOSwbuFgLeJ8/s-l225.webp',
      title: 'New ListingGan Craft Metal Jig Cosco 30 grams 06 (1127)',
      price: 15.3,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/0DYAAOSwh4BgLUOm/s-l225.webp',
      title:
        'New Listing12 PACK Silverbrook Yellow Dancer Booby Lure Fly Sz 10 Trout Fishing Flies',
      price: 13.84,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/O4IAAOSwt5ZgLUQp/s-l225.webp',
      title:
        'New Listing12 PACK Silverbrook Sunburst Coral Booby Lure Fly Sz 10 Trout Fishing Flies',
      price: 13.84,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/HKMAAOSwCN5d3eus/s-l225.webp',
      title:
        'Aventik Aluminum Fly Fishing Box Slit Foam with Compartments/Easy Grip Flies Jig',
      price: 18.16,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/sXQAAOSwMZdgIM3F/s-l225.webp',
      title:
        'New ListingElectric Live bait Swimming Robotic Segment Fishing Lure LED Animated Swimbait',
      price: 24.35,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/k-MAAOSwLURgLggx/s-l225.webp',
      title:
        'New Listing30pcs Metal Mixed Spinner Fishing Lure Pike-Salmon Baits Bass Trout Fish Hook',
      price: 16.33,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/RHwAAOSw3NFgBMpZ/s-l225.webp',
      title:
        'New ListingLucky Craft Bds1 (mad Craw) CRANKBAIT FISHING LURE TACKLE BOX FIND HARD TO FIND ',
      price: 25,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/N0sAAOSwqNBgLe~X/s-l225.webp',
      title:
        'New Listing5Pcs Squid Jig Hooks Fishing Squid Cuttlefish Sleeve Jig Lures Octopus Baits',
      price: 9.82,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/gkUAAOSwzJBgLeBq/s-l225.webp',
      title:
        'New Listing# F312  CHUCK WOOLERY MOTO CHUG, TOPWATER FISHING LURE',
      price: 7.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/~2AAAOSwSQpgLeQP/s-l225.webp',
      title:
        'New Listing# F351  REBEL TINY WEE CRAWFISH, TOPWATER FISHING LURE',
      price: 3.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/8QMAAOSwYcJgLeY6/s-l225.webp',
      title: 'New Listing# F386  HEDDON TINY LUCKY 13, TOPWATER FISHING LURE',
      price: 2.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/5moAAOSwy8ZezuMd/s-l225.webp',
      title:
        'Silicone Fly Fishing Sea Worm Lead Head hook Soft  Bass Bait Minnow Lure',
      price: 6.8,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/xW4AAOSwp2ddv3RZ/s-l225.webp',
      title: "1 dozen (12) - Guide's Choice Hare's Ear - Bead Head",
      price: 7.14,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/-YgAAOSwdGtcyakZ/s-l225.webp',
      title:
        "New ListingLOLLIPOP LURES 'CAMOUFLAGE' Color Zoka Jig Livebait Round Ball Boat Fishing",
      price: 13.5,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/-38AAOSwZFJcyayW/s-l225.webp',
      title:
        'New ListingLOLLIPOP LURES "TENZO" Camouflage Livebait Zoka Jig Boat Sea Fishing',
      price: 13.5,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/TjcAAOSwCuBgLTqW/s-l225.webp',
      title:
        'New Listing12 PACK Silverbrook Red Blob Lure Fly Sz 10 Trout Fishing Flies Hand Tied',
      price: 13.84,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/EQAAAOxywbNQ~bvU/s-l225.webp',
      title:
        'New Listing4 Irideus Feather River Fly Fishing Fly Boxes Tackle Box Case Fish  Compartment',
      price: 19.84,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/6YsAAOSwkupfFYzF/s-l225.webp',
      title: 'New Listing7 Vintage Popper Fishing Lures - Used Variety',
      price: 5.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/LPcAAOSw55ZgLe~Y/s-l225.webp',
      title:
        'New Listing5 Pack Soft Mouse Fishing Lures Rubber Mice Baits Top Water Rats Tackle Set',
      price: 13.89,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/e-sAAOSw0~pgLdOd/s-l225.webp',
      title:
        'New Listing# F376  LOT OF 5 SPOON FISHING LURES, HOPKINS SHORTY, KRIPPLED K, BLUE FOX',
      price: 4.99,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/JsoAAOSwctVgLeJ8/s-l225.webp',
      title: 'New ListingGan Craft Metal Jig Cosco 20 grams 02 (0960)',
      price: 14.7,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/aBcAAOSwBnZaxaG7/s-l225.webp',
      title:
        '5PCS Fishing Jigging Slow Jig Deep sea Lure Jigbait spoon baits 100/160g/250g',
      price: 47.29,
      category: 'fishing',
    },
    {
      imgSrc:
        'https://i.ebayimg.com/thumbs/images/g/W6cAAOSwFV9X0MDC/s-l225.webp',
      title:
        '5PCS Fishing Jigging Deep sea Metal Jig Spoon Lure Jigbait spoon Hook 60g-300g',
      price: 59.39,
      category: 'fishing',
    },
  ];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    console.log('olen home componendis');
  }

  // onAddToCart(item: {imgSrc: string, title: string, price: number, category:string}) {
  onAddToCart(item: Item) {
    console.log('Testing' + ' ' + item);
    this.cartService.cartItems.push(item);
  }
}

// string - jutumärkidega väärtus '12.00'
// number - numbriline väärtus 12.00
// boolean - true/false
// object/json - {}
// massiivid-listid - []
