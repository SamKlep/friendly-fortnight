const products = [
  {
    title: 'Peter Parker, The Spectacular Spider-Man',
    subtitle: 'Giant-Sized Annual',
    publisher: 'Marvel',
    issue: 7,
    year: 1987,
    age: 'Modern',
    author: 'Jim Owsley',
    artist: 'Alan Kupperberg',
    character: 'Spider-Man',
    category: 'super-hero',
    description:
      'At the Native American reservation near Hartsdale, New Mexico, the Puma undergoes a challenge to prove that he is still worthy of his power. With the challenge over, his uncle Joseph Threetrees still thinks he acted inappropriately. He explains that he was chosen to protect the tribe from "He Who Comes From Beyond".',
    image: '/images/ssm-gsa-1.jpg',
    brand: 'Marvel',
    category: 'Comics',
    price: 10,
    countInStock: 3,
    rating: 9.2,
    numReviews: 0,
  },
  {
    title: 'Peter Parker, The Spectacular Spider-Man',
    subtitle: 'Double-Sized Annual',
    publisher: 'Marvel',
    issue: 5,
    year: 1985,
    age: 'Modern',
    author: 'Peter David',
    artist: 'Mark Beachum',
    character: 'Spider-Man',
    category: 'super-hero',
    description: 'No synopsis written yet.',
    image: '/images/ssm-dsa-1.jpg',
    brand: 'Marvel',
    category: 'Comics',
    price: 5,
    countInStock: 1,
    rating: 9.6,
    numReviews: 8,
  },
  {
    title: 'Peter Parker, The Spectacular Spider-Man',
    subtitle: 'Giant-Sized Annual',
    publisher: 'Marvel',
    issue: 6,
    year: 1986,
    age: 'Modern',
    author: 'Peter David',
    artist: 'Mark Beachum',
    character: 'Spider-Man',
    category: 'super-hero',
    description: 'No synopsis written yet.',
    image: '/images/ssm-gsa-6.jpg',
    brand: 'Marvel',
    category: 'Comics',
    price: 5,
    countInStock: 5,
    rating: 8.6,
    numReviews: 12,
  },
  {
    title: 'Peter Parker, The Spectacular Spider-Man',
    subtitle: 'Annual',
    publisher: 'Marvel',
    issue: 4,
    year: 1984,
    age: 'Modern',
    author: 'Bill Mantlo',
    artist: 'Sal Buscema',
    character: 'Spider-Man',
    category: 'super-hero',
    description:
      'On a rainy night a group of criminals breaks into the vault of the First National Bank by breaking their way in from underneath. They steal as much money as they can from the vault and make their escape. However, as they exit the sewers they are attacked by Spider-Man.',
    image: '/images/ssm-a-4.jpg',
    brand: 'Marvel',
    category: 'Comics',
    price: 9,
    countInStock: 1,
    rating: 8.6,
    numReviews: 12,
  },
  {
    title: 'Peter Parker, The Spectacular Spider-Man',
    subtitle: 'King-Size Annual',
    publisher: 'Marvel',
    issue: 1,
    year: 1979,
    age: 'Modern',
    author: 'Bill Mantlo',
    artist: 'Jim Mooney',
    character: 'Spider-Man',
    category: 'super-hero',
    description:
      "Spider-Man is on his way to the scene of his last battle against Dr. Octopus when he stops briefly to stop a collapsing wall. Returning to the construction site where the battle took place, Spider-Man finds what he came looking for: One of Octopus's arms which broke off in the fight.",
    image: '/images/ssm-ksa-1.jpg',
    brand: 'Marvel',
    category: 'Comics',
    price: 14,
    countInStock: 1,
    rating: 8.7,
    numReviews: 10,
  },
  {
    title: 'Peter Parker, The Spectacular Spider-Man',
    subtitle: 'King-Size Annual',
    publisher: 'Marvel',
    issue: 2,
    year: 1980,
    age: 'Modern',
    author: 'Ralph Macchio',
    artist: 'Jim Mooney',
    character: 'Spider-Man',
    category: 'super-hero',
    description:
      "While about to break up a Maggia theft operation, Spider-Man is beaten to the punch by a masked man named the Rapier. Spider-Man joins in and helps the Rapier, who has been making press for his heroic deeds against organized crime. Although thankful for Spider-Man's help, the Rapier blows off Spidey, leaving the wall-crawler to wonder about the Rapier as he returns to his home and calls his Aunt May.",
    image: '/images/ssm-ksa-2.jpg',
    brand: 'Marvel',
    category: 'Comics',
    price: 10,
    countInStock: 1,
    rating: 9.1,
    numReviews: 12,
  },
  {
    title: 'The Spectacular Spider-Man',
    subtitle: 'The Gathering of Five (Part 4)',
    publisher: 'Marvel',
    issue: 262,
    year: 1998,
    age: 'Modern',
    author: 'John Byrne',
    artist: 'Luke Ross',
    character: 'Spider-Man',
    category: 'super-hero',
    description:
      'Spider-Man goes about his daily routine as Norman Osborn prepares for the Gathering of Five. Mary Jane considers returning to modeling.',
    image: '/images/ssm-262.jpg',
    brand: 'Marvel',
    category: 'Comics',
    price: 3,
    countInStock: 1,
    rating: 9.1,
    numReviews: 12,
  },
  {
    title: 'The Spectacular Spider-Man',
    subtitle: 'The Final Chapter (Part 3 of 4)',
    publisher: 'Marvel',
    issue: 263,
    year: 1998,
    age: 'Modern',
    author: 'Howard Mackie',
    artist: 'Luke Ross',
    character: 'Spider-Man',
    category: 'super-hero',
    description: 'Synopsis not yet written.',
    image: '/images/ssm-263.jpg',
    brand: 'Marvel',
    category: 'Comics',
    price: 3.5,
    countInStock: 1,
    rating: 9.1,
    numReviews: 4,
  },
  {
    title: 'The Spectacular Spider-Man',
    subtitle: '',
    publisher: 'Marvel',
    issue: 212,
    year: 1998,
    age: 'Modern',
    author: 'Mike Lackey',
    artist: 'Sal Buscema',
    character: 'Spider-Man',
    category: 'super-hero',
    description:
      'Spider-Man is out on patrol in the pouring rain, the weather that fits his current mood. His mind is focused on the fact that the two people who were claiming to be his parents were actually artificial life forms created by the Chameleon, as part of a plot orchestrated by the late Harry Osborn, the Green Goblin.',
    image: '/images/ssm-212.jpg',
    brand: 'Marvel',
    category: 'Comics',
    price: 8,
    countInStock: 1,
    rating: 9.3,
    numReviews: 2,
  },
  {
    title: 'The Spectacular Spider-Man',
    subtitle: '',
    publisher: 'Marvel',
    issue: 213,
    year: 1994,
    age: 'Modern',
    author: 'Ann Nocenti',
    artist: 'James Fry',
    character: 'Spider-Man',
    category: 'super-hero',
    description:
      "After a busy night on patrol, Spider-Man when he hears a police siren alerting him of another crime. The wall-crawler decides to investigate it as Peter Parker. Changing out of his costume, he thinks about he hasn't been out of costume in a while and wonders if his alter-ego still has a job with the Daily Bugle.",
    image: '/images/ssm-213.jpg',
    brand: 'Marvel',
    category: 'Comics',
    price: 8,
    countInStock: 1,
    rating: 9.3,
    numReviews: 1,
  },
  {
    title: 'The Spectacular Spider-Man',
    subtitle: 'The Predator and The Prey (Part 1 of 2)',
    publisher: 'Marvel',
    issue: 215,
    year: 1994,
    age: 'Modern',
    author: 'Mike Lackey & Tom DeFalco',
    artist: 'Sal Buscema',
    character: 'Spider-Man',
    category: 'super-hero',
    description:
      "In the sewers below New York City, something has scared the rats that make it their home. The racket also attracts the attention of some slimy creature that also dwells in the sewers. Not far away, the Scorpion is on a rampage because he is on his wit's end.",
    image: '/images/ssm-215.jpg',
    brand: 'Marvel',
    category: 'Comics',
    price: 8,
    countInStock: 1,
    rating: 9.5,
    numReviews: 1,
  },
  {
    title: 'The Spectacular Spider-Man',
    subtitle: '',
    publisher: 'Marvel',
    issue: 214,
    year: 1994,
    age: 'Modern',
    author: 'Ann Nocenti',
    artist: 'James Fry',
    character: 'Spider-Man',
    category: 'super-hero',
    description:
      'After escaping Spider-Man, Bloody Mary tracks down Jack Morray, a man with a history of abusing women. She is about to shoot him with her sniper rifle but decides against it, wanting to kill him up close and personal so he knows why he is dying.',
    image: '/images/ssm-214.jpg',
    brand: 'Marvel',
    category: 'Comics',
    price: 14,
    countInStock: 2,
    rating: 9.3,
    numReviews: 4,
  },

  {
    title: 'The Spectacular Spider-Man',
    subtitle: 'The Predator and The Prey (Part 2 of 2)',
    publisher: 'Marvel',
    issue: 216,
    year: 1994,
    age: 'Modern',
    author: 'Tom DeFalco & Todd DeZago',
    artist: 'Sal Buscema',
    character: 'Spider-Man',
    category: 'super-hero',
    description:
      'In the sewers of Manhattan, a strange mass of green slime crawls through the tunnels consuming everything that comes into its path. Elsewhere in the sewers, Mac Gargan spends time enjoying himself in his hideout, decked out with amenities from his friend Phillip Cussler, Sr.',
    image: '/images/ssm-216.jpg',
    brand: 'Marvel',
    category: 'Comics',
    price: 12,
    countInStock: 2,
    rating: 9.3,
    numReviews: 1,
  },
]

export default products
