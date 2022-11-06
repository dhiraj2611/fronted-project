import React, { createContext, useState } from 'react'

export const store = createContext()

const Details = (props) => {
  const [details, setDetails] = useState([
    {
      "id": 1,
      "title": "pushpa",
      "Image": "https://i.ytimg.com/vi/Q1NKMPhP8PY/maxresdefault.jpg",
      "category": "Bollywood",
      "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto cumque exercitationem delectus impedit neque aspernatur magni iure quod, repellat inventore a soluta nihil aut reiciendis, possimus cum explicabo odio facilis? Reprehenderit illum, ratione, mollitia tempora tenetur, quae dolore consequuntur veniam dolorem amet magni omnis aut ullam rerum officiis dignissimos?"

    
      
    },
    {
      "id": 51,
      "title": "bhrhamshtra",
      "Image": "https://i.ytimg.com/vi/AgS_6UbQ8JM/maxresdefault.jpg",
      "category": "bollywood",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto cumque exercitationem delectus impedit neque aspernatur magni iure quod, repellat inventore a soluta nihil aut reiciendis, possimus cum explicabo odio facilis? Reprehenderit illum, ratione, mollitia tempora tenetur, quae dolore consequuntur veniam dolorem amet magni omnis aut ullam rerum officiis dignissimos?"

    },
    {
      "id": 2,
      "title": "Hit",
      "Image": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/hit-et00125346-05-11-2020-06-58-28.jpg",
      "category": "Bollywood",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto cumque exercitationem delectus impedit neque aspernatur magni iure quod, repellat inventore a soluta nihil aut reiciendis, possimus cum explicabo odio facilis? Reprehenderit illum, ratione, mollitia tempora tenetur, quae dolore consequuntur veniam dolorem amet magni omnis aut ullam rerum officiis dignissimos?"
    },
    {
      "id": 61,
      "title": "Priyanka  Chopra For her performance, she won several awards, including the National Film Award for Best Actress.",
      "Image": "https://ik.imagekit.io/j83rchiauw/A_List_Star/priyanka-chopra-biography.tring.png?tr=q-100,e-sharpen",
      "category": "footer1",
      "description": "Priyanka made her debut in 2002 with the Tamil film Thamizhan. Then in 2003 she debuted in Bollywood with the film, The Hero: Love Story of a Spy. It was the highest-grossing film of the year. Then she appeared in the film Andaaz which was a success at the box office. For this film, she won the Filmfare Best Female Debut Award and a nomination for the Filmfare Best Supporting Actress Award.Then in 2004 she starred in films like Plan, Kismat and Asambhav which did not do very well at the box office. Later that year she acted in a movie called Mujhse Shaadi Karogi which was the third highest-grossing film of that year. Then she starred in Aitraaz where she played a negative role. It was a hit movie and she received the Filmfare Best Villain Award for playing the role. She also received a second nomination for the Filmfare Best Supporting Actress Award.In the year 2005, she had six flops, including Blackmail, Karam, Yakeen and Barsaat. After this she acted in two films, Waqt: The Race Against Time and Bluffmaster which went well at the box office. Then in 2006, she starred in two successful films, Krrish and Don - The Chase Begins Again. In the year 2007 she acted in two more films, Salaam-e-Ishq: A Tribute To Love and Big Brother which flopped at the box office."
    },
    
    {
      "id": 3,
      "title": "Vishnu. Vaishnavism is the sect within Hinduism that worships Vishnu. He is considered as the Para Brahman , the Preserver god of the Trimurti (the Hindu Trinity), and his many incarnations. Vaishnavites regard him to be eternal and the strongest and supreme God.",
      "Image": "https://spiderimg.amarujala.com/cdn-cgi/image/width=414,height=233,fit=cover,f=auto/assets/images/2022/03/01/750x506/brahmastra_1646112519.jpeg",
      "category": "Bollywood",
      "description": "The Brahmashirsha astra is a weapon that is said to be able to destroy the universe, capable of destroying creation and vanquishing all beings. They are the most destructive, powerful, and irresistible weapons mentioned in Hinduism. These weapons are all created by Lord Brahma.It is termed as a fiery weapon that creates a fierce fireball,[1] blazing up with terrible flames and countless horrendous thunder flashes. When discharged, all nature including trees, oceans, and animals tremble, and the sky surrounds with flame, glaciers melt and mountains shatter with copious noise all around.When used, the Brahmastra which is person-centric can destroy a powerful enemy if he does not possess an alternate counter weapon. If it is Bhramashirsha Astra it causes collateral damage to every useful resource in a given area and prevents even a single blade of grass from ever growing in that area again. It is mentioned in Epic that there will be no rainfall for 12 Brahma years (12 Brahma years = 37.32 trillion human years) and climate conditions will worsen. The strike of the Brahmashira astra will eventually destroy everything.When Ashwatthama hurled the Brahmashira astra against Arjuna, the Pandava countered by invoking the same weapon; to prevent widespread destruction Narada and Vyasa stood between the two astras, ordering the two warriors to withdraw their weapons. (Arjuna, being the perfect practitioner of Brahmacharya, was able to do so; Ashwatthama could not call back his weapon because of his many flaws, and then compounded his sins by aiming the astra at Uttarā's womb to kill the unborn Parikshita.)"
    },
    {
      "id": 5,
      "title": "Jai Hemant Shroff and he changed it to Tiger. During an interview with Hindustan Times, the Baaghi actor revealed the reason behind the change and said that it happened because people used to compare him with a tiger due to his biting habits.",
      "Image": "https://www.india.com/wp-content/uploads/2020/06/pjimage-2-15.jpg",
      "category": "Bollywood",
      "description": "In June 2012, Shroff was at last signed on by Sajid Nadiadwala to make his introductory debut in Heropanti. Heropanti released on 23 May 2014 and turned out to be a commercial success despite receiving negative reviews from critics. For his debut performanceShroff next appeared in Sabbir Khan’s action drama serial Baaghi (2016) along with Shraddha Kapoor underproduction of Nadiadwala Grandson Entertainment, which ended up being a box office success achievement grossing overProduced by Balaji Motion Pictures and coordinated by Remo D’Souza, the film netted ₹420 Million in India. In 2017, Shroff featured in Munna Michael, along with Nidhhi Agarwal. Produced by Eros International and directed by Sabbir Khan, the film gained negative reviews from critics and earned ₹311 Million in domestic areas to emerge as his second continuous commercial disappointment."
    },
    {
      "id": 6,
      "title": "Shahid kapoor  Actor: Haider. Shahid's rise to stardom reads like a bollywood script: from a struggler to a winner. With his hard work, perseverance",
      "Image": "https://www.pinkvilla.com/imageresize/when_mira_rajput_received_flak_for_her_puppy_comment_and_shahid_kapoor_supported_his_wife_0.jpg?width=752&format=webp&t=pvorg",
      "category": "Bollywood",
      "description": "hahid Kapoor is a stunning Bollywood actor as well as model. He has received numerous awards for his several movie roles and was identified as a talented fresh-face in Bollywood film industry.He was born in Mumbai, India on February 25, 1981. Shahid Kapoor is the son of well-known actress Neelima Azeem, who is a classical dancer as well as actress and his father Pankaj Kapoor. His parents divorced when Shahid was only 3 years old, he stayed with his Mom. He also was dating with Bollywood actress and co-star Kareena Kapoor.A handsome and talented young actor of Bollywood with average build and height, Shahid Kapoor exudes a natural chocolaty charm. He is also a talented dancer getting training under the supervision of Shaimak Davar. His first appearance ahead of camera was clean chance when he was seen at Pepsi audition. Shahid Kapoor was nominated and shot this commercial along with megastars Shah Rukh Khan, Rani Mukerji and Kajol. After that, he appeared in a number of music videos such as Aankhon Mein Tera Hi Chehra and Kehna to Hai in which he was coupled along with sizzling actress Hrishita Bhatt. Shahid Kapoor has also appeared in a number of commercials for products like Onida, Kit Kat, Fuji Film, Ala Bleach and Clinic All Clear."
    },
    {
      "id": 54,
      "title": "Sidharth Malhotra and Kiara Advani were spotted together at Karan Johar's office on. Sidharth recently confirmed they are in a relationship",
      "Image": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/8/2022_8$largeimg_257330989.JPG",
      "category": "mix",
      "description": "Ever since the movie, Shershaah was released, Kiara Advani and Sidharth Malhotra's massive fanbase has been rooting for them to become a couple and announce their relationship to the world. However, even though the duo has been dating for quite some time, none of them has spoken about it in front of the media. But, their social media PDAs, public outings and dinner dates show how much they are in love with each other.However, a few days back, rumours were rife that Sidharth and Kiara had parted ways for reasons best known to them. A source close to the couple had even mentioned to the media that they had fallen out of love and wouldn't meet each other anymore. The news about their breakup had devastated their fans. But, when Sidharth Malhotra had gone for Kiara's Bhool Bhulaiya 2 screening, their cute love-filled gestures had won our hearts, and everyone had wondered whether everything was fine between them."
    },
    {
      "id": 7,
      "title": "Anushka Sharma talked about her personal and professional life. She also called daughter Vamika her 'true, undiluted happiness' who loves to ",
      "Image": "https://www.bollywoodshaadis.com/img/article-l-2022513513584850328000.jpg",
      "category": "Bollywood",
      "description": " Anushka Sharma reveals 'undiluted happiness' is daughter Vamika's simple act of trying to make her laugh,Anushka Sharma and Virat Kohli are doting parents to their first child - daughter Vamika. The parents have been protective of her privacy and not officially revealed her identity. They also haven't spoken often about Vamika in the public domain. In a recent interview with Harper's Bazaar, Anushka got candid about motherhood, returning to work post giving birth and the apple of her eye Vamika. Pointing out that she feels empowered by the choices she has made in her career and personal life, Anushka said, I feel empowered with the choices I've made, which is how I always want to feel. No one is asking me to do it; this is my choice, to be able to do things in a certain way. I don't think I can be someone who can do multiple things at once, but there are women who can, and kudos to them. But that does not mean anyone is lesser or more because of that." 
    },
  {
    "id": 8,
    "title": "Sonam Kapoor and Anand Ahuja were blessed with a baby boy recently. The news of the couple welcoming the little one was shared by Neetu Kapoor on social media.",
    "Image": "https://static.toiimg.com/thumb/msid-93803719,imgsize-61588,width-800,height-600,resizemode-75/93803719.jpg",
    "category": "Bollywood",
    "description": "Just a couple of days ago, Sonam Kapoor welcomed her first child, a baby boy, with husband Anand Ahuja. The couple is on cloud nine ever since they embraced parenthood. “We know our lives are forever changed, Sonam and Anand proudly said announcing the big news to their fans.Sonam and Anand are yet to reveal the name of their baby boy. But it seems the actress had dropped a major hint about the same on her Instagram stories a few days back. Sonam had got a customised blanket and clothes done for the baby that had his name written on them. The name is Baby K Ahuja and many are wondering if Sonam has kept the boy’s name that starts with K initial. The Kids label that presented this to Sonam had written on their post, “We wish Sonam Kapoor the very best for this new chapter in her life and are glad to be a small part of it."
  },
  {
    "id": 9,
    "title": "airlift",
    "Image": "https://femina.wwmindia.com/content/2020/oct/airlift71602773021.jpg",
    "category": "Bollywood",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dicta error enim eum tempora dolorem quia vero modi quam ipsum officia ut consectetur incidunt, maxime nemo laudantium corrupti itaque. Minus ducimus quo corporis facere autem esse ratione incidunt dolore velit optio omnis ipsa, molestias dolor deserunt voluptatem perspiciatis in reprehenderit?"
  },
  {
    "id": 10,
    "title": " Madhuri Dixit was born on 15 May 1967 into a Marathi Kokanastha Brahmin family in Bombay (present-day Mumbai) to Shankar and Snehlata Dixit. She has two elder sisters and an elder brother.",
    "Image": "https://www.bollywoodshaadis.com/img/article-l-202225614004550445000.jpg",
    "category":"Bollywood",
    "description": "Madhuri Dixit is a famous Indian actress known for her roles in the movies ‘Beta,’ ‘Saajan,’ and ‘Hum Aapke Hain Koun..!’ She began her career in the 1980s and came to popularity with her role in the film ‘Tezaab’, where she starred alongside veteran actor Anil Kapoor. She next appeared in the film ‘Dil’ in which she shared the screen with Aamir Khan. Born into a middle-class family in Mumbai, she started learning dance at an early age. She ventured into acting as a youngster and struggled for a few years as most of her initial films were flops. She eventually found success and went on to become one of the leading actresses in the Indian film industry. She took a break from her career following her marriage before returning to the entertainment industry. More recently, she played an important role in the film ‘Gulaab Gang’, which was about the struggles of women in India. Dixit has been nominated for fifteen Filmfare Awards, out of which she won eight. She was also honored with the Padma Shri, the fourth highest civilian honor in India. She is known for her social works as well."
  },
  {
    "id": 11,
    "title": " Harry Potter star Rupert Grint calls relationship with JK Rowling ‘tricky’: ‘I don’t necessarily agree with everything but…’",
    "Image": "https://www.scriptslug.com/assets/posters/_posterPageJpg/harry-potter-and-the-deathly-hallows-part-2-2011.jpg",
    "category": "Hollywood",
    "description": "Harry Potter actor Rupert Grint, who was recently seen in the reunion of the franchise with Daniel Radcliffe and Emma Watson, recently opened up about his relationship with author JK Rowling. Rowling played a key part in casting Rupert in the role of Ron. In a piece for The Times, Rupert said he considers JK Rowling to be like his auntie.He wrote, “I liken J.K. Rowling to an auntie. I don’t necessarily agree with everything my auntie says, but she’s still my auntie. It’s a tricky one.”"
  },
  {
    "id": 55,
    "title": "Samaritan review: A Promising premise is wasted by this mediocre film ",
    "Image": "https://assets.gadgets360cdn.com/pricee/assets/product/202207/Samaritan_Poster_1657649780.jpg",
    "category": "mix",
    "description": "In a scene just before Amazon Prime’s Samaritan climaxes, the protagonist played by a worn and visibly old Sylvester Stallone tells an exuberant kid “The things is there is good and bad inside each one of us”. It is a rather declarative way of ending a film but given the film’s late narrative twist, it is also a neatly pulled-off message. But cinema isn’t just the messaging, but also the craft of leading you through a journey that makes the message palatable, even if unexpected. In Samaritan, no such thing happens as a film ripe with promise and casted perhaps to perfection, meanders pointlessly before turning around at the end, to reveal it had bright ideas all along, just not the tools to design a decent story around it. It is decent rescue act, loaded with an interesting moral quandary, but it appears in quantity far little, far too late.Samaritan is the story of the most obviously named white guy from Atlantic City – Joe Smith. Smith picks up garbage, wears a hoodie and keeps to himself. He is also an old man, an aspect of his character that the film does a poor job of exploring. Joe’s life is pre-dated by a famous feud between two superheroes –  the good one being Samaritan and the bad one called Nemesis. A fight to the end, we are told in the prologue, ended with the death of Nemesis. Samaritan has since gone missing too. Of course it has been clear all along, ever since the trailer for the film released that Stallone is the superhero out of commission. His withdrawal from playing saviour, however, isn’t exactly fleshed as much as it is argued over with the diction of someone who has just found what research is."
  },
  {
    "id": 12,
    "title": "sandman",
    "Image": "https://images.theconversation.com/files/483519/original/file-20220908-19-5crato.png?ixlib=rb-1.1.0&rect=20%2C0%2C2000%2C1413&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
    "category": "Hollywood",
    "description": "rie Larson is not sure whether she will be returning to the Marvel Cinematic Universe (MCU) after The Marvels. In a recent interview, the actor revealed that she is uncertain about her future as one of the strongest Avengers. Brie was introduced to the MCU in the 2019 release Captain Marvel. Upon its release, both the movie and Brie received a fair bit of trolling and hate. In fact, the reviews were also largely middling at first. It now has a 79 per cent rating by critics on Rotten Tomatoes, while the audience vote reflects a poor figure of 45 per cent.Brie Larson was last seen as Captain Marvel in a post-credit scene of Disney Plus show Ms Marvel, and she will next be essaying Carol Danvers in The Marvels, where she will also share screen space with Pakistani-Canadian actor Iman Vellani."
  },
  {
    "id": 13,
    "title": "Amber Heard says she has received threats 'every single day' during trial: 'People want to put my baby in a microwave' ",
    "Image": "https://s.yimg.com/ny/api/res/1.2/d1PwTu2C_2glmxf89P7rRA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MA--/https://s.yimg.com/uu/api/res/1.2/H3EdkwM3uTwiSJdbcU2nsg--~B/aD0wO3c9MDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/evening_standard_239/0a0da7052756563a5992cc90d9fd842f",
    "category": "Hollywood",
    "description": "In a video from the trial shared by Law & Crime Network on their YouTube channel, Amber told the jury, I am harassed, humiliated, threatened, every single day. Even just walking into this courtroom. Sitting here in front of the world, having the worst parts of my life, things that I have lived through, used to humiliate me. People want to kill me and they tell me so every day. People want to put my baby in the microwave, and they tell me that. She also said, I live my life with these sets of rules I've to follow, my friends have to follow for me not to have a panic attack or a triggering event or I relive the trauma, even from training to do. In my movie, for instance, for training for Aquaman, a combat scene and a trigger happen. I have a meltdown and have to deal with that, the crew I work with have to deal with that, because of the damage I walk around with every single day. I am not sitting in this courtroom snickering. I’m not sitting in this courtroom laughing, smiling, or making snide jokes. I’m not. This is horrible. A jury is scheduled to hear the closing arguments on Friday in Johnny's lawsuit against Amber. Each side will have two hours to summarise their case in a trial that has stretched on for six weeks. Johnny Depp is suing Amber for $50 million in Virginia's Fairfax County Circuit Court over a December 2018 op-ed she wrote in The Washington Post describing herself as “a public figure representing domestic abuse”. His lawyers say he was defamed by the article even though it never mentioned his name."
  },
  {
    "id": 62,
    "title": "Fashion and beauty are all about losing yourself, feeling confident’: Katherine Langford ",
    "Image": "https://i.pinimg.com/474x/13/11/35/131135703386db45fe3165dc4f29d513.jpg",
    "category": "footer2",
    "description": "After impressing fans and critics alike with her role of Hannah Baker, a troubled teenager in Netflix’s hit series 13 Reasons Why — a show that put the spotlight on mental health issues, bullying and gun violence —  Katherine Langford has only climbed the stairs of stardom.The Knives Out actor, who is currently attending the 75th Festival de Cannes in France, recently spoke with indianexpress.com ahead of her red carpet debut at the French Riviera. Her first look was a glittery custom Prada gown for the screening of Final Cut (Coupez!). Styled by Molly Dickson, Langford’s ensemble featured silver sequins and a sweeping train.The Cannes film festival has always been very special in my heart. To bring films, fashion and filmmakers together is special and exciting. It’s even more exciting, in a way, to be able to come together and celebrate films. [It is] the 25-year anniversary of L’oréal Paris sponsoring the festival, and so, it is a real privilege and honour and I am very excited to be here."
  },
  {
    "id": 14,
    "title": "Tom Cruise: Hollywood’s last real movie star ",
    "Image": "https://images.contentstack.io/v3/assets/bltf04078f3cf7a9c30/blt9a9d126e903a3005/62bae3ab1177b91512744836/GettyImages-1398214825.jpg",
    "category": "Hollywood",
    "description": "The helicopter had the star’s name painted on it, the letters coming into focus as it landed on the retired aircraft carrier, which was adorned for the occasion with an expansive red carpet and a smattering of fighter jets. Tom Cruise. Top Gun. Maverick. It couldn’t have been anyone else.Decked out in a slim-fitting suit, his hair a little shaggier and his face a little craggier than when he first played Lt. Pete “Maverick” Mitchell more than three decades ago, Mr. Cruise took the stage on the U.S.S. Midway while Harold Faltermeyer’s iconic theme music played in the background."
  },
  {
    "id": 15,
    "title": "Deepika Padukone returns to Hollywood, to star and co-produce cross-cultural rom-com ",
    "Image": "https://images.news18.com/ibnlive/uploads/2017/01/deepika-vin01.jpg?im=Resize,width=360,aspect=fit,type=normal?im=Resize,width=320,aspect=fit,type=normal",
    "category": "Hollywood",
    "description": "Deepika Padukone has been winning hearts in the West ever since she starred in xXx: Return of Xander Cage opposite Vin Diesel. Not only was she praised for her performance in the film, the actress continued to rule hearts with her fashion stints at high profile red carpets globally. Now that the actress has made her entry in Hollywood, people can’t stop wondering if she will be seen in any other international projects."
  },
  {
    "id": 18,
    "title": " Once Upon a Time in Hollywood movie review: Tales from Tinseltown",
    "Image": "https://see.news/wp-content/uploads/2020/01/once-upon-a-time-in-hollywood-730x375.jpg",
    "category": "Hollywood",
    "description": "Director Quentin Tarantino’s latest venture, Once Upon A Time In Hollywood, will be re-released in India on February 14. The film, which was based on the Hollywood scene in Los Angeles of 1969, won commercial success and critical acclaim all over the world.The film follows the trials and tribulations of an ageing star Rick Dalton (Leonardo DiCaprio) and his stunt double Cliff Booth (Brad Pitt) with several real-life stories weaved into the plot such as the infamous Charles Manson murders.Also starring Margot Robbie, Al Pacino and Dakota Fanning, the film has garnered several awards. Once Upon A Time In Hollywood will be re-released in India by Sony Pictures Entertainment India."
  },
  {
    "id": 19,
    "title": " WATCH | Black Adam drops second trailer ",
    "Image": "https://images.newindianexpress.com/uploads/user/imagelibrary/2022/9/10/w900X450/blackadam.jpg?w=900&dpr=1.0",
    "category": "Hollywood",
    "description": "The film stars Dwayne ‘The Rock’ Johnson as the eponymous anti-hero, Black Adam. The film, which has been in development hell for quite some time, is finally ready to hit the theatres on 21 October.The Rock had earlier announced that he has been personally involved with the development of the project for ten years now. Created by writer Otto Binder and artist CC Beck for DC, the Black Adam character is an anti-hero and the archnemesis of DC’s Captain Marvel, who was later renamed Shazam.The character was originally designed as a villain, an ancient Egyptian who held the powers of Shazam thousands of years ago, he later evolved into an antihero."
  },
  {
    "id": 20,
    "title": "Response to Quantico in India was overwhelming, says Priyanka Chopra ",
    "Image": "https://i.pinimg.com/originals/03/fc/56/03fc5633b111100c15d086a0bac3dcac.jpg",
    "category": "Hollywood",
    "description": "Priyanka Chopra’s American television drama series Quantico has landed itself in a soup after one of its episodes recently struck a wrong chord with the audience. The episode shows ‘Indian nationalists’ plotting an attack in Manhattan with the ulterior motive of blaming it on Pakistan. The episode, aired on June 1, shows an MIT professor, who is in possession of uranium, planning to attack an India-Pakistan summit in New York."
  },
  {
    "id": 21,
    "title": " hop Laptops, computers, Desktops, Gaming PCs, Monitors, Workstations, Storage & Servers. Explore Dell's latest computers & technology solutions. ",
    "Image": "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/EDIT_1_8.jpg",
    "category": "Technology",
    "description": "Dell is a computer technology company based in Round Rock, Texas, United States, that develops, sells, repairs and supports computers and related products and services. The company had briefly stepped into making Android smartphones but it shuttered its initiative. It remains one of the largest manufacturers of Windows PCs and tablets in the world."
  },
  {
    "id": 56,
    "title": "Why I fell in love with Microsoft’s Surface Laptop Studio despite its shortcomings ",
    "Image": "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1657792704.webp",
    "category": "mix",
    "description": "As I was waiting for someone at a Delhi hotel recently, I saw a gentleman coming my way. He sat next to me and curiously asked about the laptop I was using. “It’s a Surface Laptop Studio,” I replied. “Does Microsoft make its own laptops?” He admitted he wasn’t aware of the Surface brand but told me he liked the form factor of the Surface Laptop Studio. “It’s different from my MacBook Pro,” said the man who introduced himself as the owner of an architectural firm. This conversation just reinforced my belief that there will be takers for Microsoft’s experimental Surface Laptop Studio, which blends certain elements of the desktop Surface Studio and the premium 2-in-1 Surface Book. It’s a mobile workstation that’s also a sketching slate and a portable home theater. I have been using the Surface Laptop Studio for a few days, and I am in love with this device even though it is not perfect. Here is my review."
  },
  {
    "id": 52,
    "title": "Delivery Notification Reveals the Location of WhatsApp, Signal and Threema Users ",
    "Image": "https://howtofix.guide/wp-content/uploads/2021/05/Express-news-me-popup.jpg",
    "category": "technology",
    "description": "As I was waiting for someone at a Delhi hotel recently, I saw a gentleman coming my way. He sat next to me and curiously asked about the laptop I was using. “It’s a Surface Laptop Studio,” I replied. “Does Microsoft make its own laptops?” He admitted he wasn’t aware of the Surface brand but told me he liked the form factor of the Surface Laptop Studio. “It’s different from my MacBook Pro,” said the man who introduced himself as the owner of an architectural firm. This conversation just reinforced my belief that there will be takers for Microsoft’s experimental Surface Laptop Studio, which blends certain elements of the desktop Surface Studio and the premium 2-in-1 Surface Book. It’s a mobile workstation that’s also a sketching slate and a portable home theater. I have been using the Surface Laptop Studio for a few days, and I am in love with this device even though it is not perfect. Here is my review."
  },
  {
    "id": 22,
    "title": "Apple Beta Software programme users in India to get 5G next week ",
    "Image": "https://images.indianexpress.com/2022/11/Apple-iPhone-14-Express-Photo.jpg",
    "category": "Technology",
    "description": "For $29.99 a month, a website called PimEyes offers a potentially dangerous superpower from the world of science fiction: the ability to search for a face, finding obscure photos that would otherwise have been as safe as the proverbial needle in the vast digital haystack of the internet.A search takes mere seconds. You upload a photo of a face, check a box agreeing to the terms of service and then get a grid of photos of faces deemed similar, with links to where they appear on the internet. The New York Times used PimEyes on the faces of a dozen Times journalists, with their consent, to test its powers.PimEyes found photos of every person, some that the journalists had never seen before, even when they were wearing sunglasses or a mask, or their face was turned away from the camera, in the image used to conduct the search. PimEyes found one reporter dancing at an art museum event a decade ago, and crying after being proposed to, a photo that she didn’t particularly like but that the photographer had decided to use to advertise his business on Yelp. A tech reporter’s younger self was spotted in an awkward crush of fans at the Coachella music festival in 2011. A foreign correspondent appeared in countless wedding photos, evidently the life of every party, and in the blurry background of a photo taken of someone else at a Greek airport in 2019. A journalist’s past life in a rock band was unearthed, as was another’s preferred summer camp getaway."
  },
  {
    "id": 63,
    "title": "A face search engine anyone can use is alarmingly accurate ",
    "Image": "https://img.securityinfowatch.com/files/base/cygnus/siw/image/2020/09/GettyImages_913641954.5f4fdc9f8b8b1.png?auto=format,compress&fit=fill&fill=blur&w=1200&h=630",
    "category": "footer3",
    "description": "For $29.99 a month, a website called PimEyes offers a potentially dangerous superpower from the world of science fiction: the ability to search for a face, finding obscure photos that would otherwise have been as safe as the proverbial needle in the vast digital haystack of the internet.A search takes mere seconds. You upload a photo of a face, check a box agreeing to the terms of service and then get a grid of photos of faces deemed similar, with links to where they appear on the internet. The New York Times used PimEyes on the faces of a dozen Times journalists, with their consent, to test its powers.PimEyes found photos of every person, some that the journalists had never seen before, even when they were wearing sunglasses or a mask, or their face was turned away from the camera, in the image used to conduct the search. PimEyes found one reporter dancing at an art museum event a decade ago, and crying after being proposed to, a photo that she didn’t particularly like but that the photographer had decided to use to advertise his business on Yelp. A tech reporter’s younger self was spotted in an awkward crush of fans at the Coachella music festival in 2011. A foreign correspondent appeared in countless wedding photos, evidently the life of every party, and in the blurry background of a photo taken of someone else at a Greek airport in 2019. A journalist’s past life in a rock band was unearthed, as was another’s preferred summer camp getaway."
  },
  {
    "id": 22,
    "title": "These are the best celestial events to look forward to in 2022 ",
    "Image": "https://i.ytimg.com/vi/3BJJX1xg_Cw/maxresdefault.jpg",
    "category": "Technology",
    "description": "The cosmos is as beautiful as it is mysterious. Every once in a while, the universe puts on a show for us humans here on Earth to enjoy. Sometimes, it is an eclipse, sometimes it is a meteor shower. But no matter what event, it is an occasion that you should not miss. Here, we have put together a list of celestial events that we can look forward to seeing in 2022.After the partial eclipse visible in certain parts of South America on April 30 this year, there is only one more solar eclipse left for us to witness: a partial one that will happen on October 25 and will be visible in Europe, Northeast Africa, the Middle East and parts of Asia, including India. The greatest part of the eclipse will be visible to viewers in India so save the date on your calendar.The total lunar eclipse that occurred on May 16 this year will not be the only one this year: another total lunar eclipse is predicted to happen once again on November 8 this year. However, just like the previous full lunar eclipse, it is unlikely that this one would be visible from India. But just like the one in May, the lunar eclipse in November will also presumably be live-streamed by multiple sources, allowing you to catch a glimpse."
  },
  {
    "id": 23,
    "title": "Telegram was started in 2013 by the brothers Nikolai and Pavel Durov, the creators of VK, the largest social network of Russia. Telegram is registered ...",
    "Image": "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/S6WF7KCFSJPBJL7FJR2FWVHY3Q.jpg",

    "category": "Technology",
    "description": "Telegram founder and CEO Pavel Durov posted an account in his public Telegram channel Monday about his history of protecting user data from the Russian government. He ends the post saying, I stand for our users no matter what. Their right to privacy is sacred. Now — more than ever.He also tweeted a link to the post that said he had no regrets about his past actions standing up to the government and that he would again without hesitation."
  },
  {
    "id": 24,
    "title": "Russia opens cases against Google, other foreign tech over data storage ",
    "Image": "https://images.indianexpress.com/2022/05/Google-AP.jpg",
    "category": "Technology",
    "description": "Russia’s communications regulator Roskomnadzor said on Friday it had opened administrative cases against Alphabet Inc’s Google and six other foreign technology companies for alleged violations of personal data legislation.Moscow has clashed with Big Tech over content, censorship, data and local representation in a simmering dispute that has erupted into a full-on information battle since Russia sent tens of thousands of troops into Ukraine on Feb. 24.Russia fined Google 3 million roubles ($46,540) last year for not storing the personal data of Russian users in databases on Russian territory, and on Friday said it had opened a new case over what it called Google’s repeated failure to comply with Russian legislation.The regulator also said it had opened cases against six other companies – Airbnb, Pinterest, Likeme, Twitch, Apple and United Parcel Service – for alleged first-time offences carrying a potential fine of 1-6 million roubles."
  },
  {
    "id": 25,
    "title": " HP CEO Enrique Lores On PC Shortages, Hybrid Work Opportunities And ‘Actively Looking’ For Acquisitions ",
    "Image": "https://image.cnbcfm.com/api/v1/image/106413289-1582808312985img_8798r.jpg?v=1582808378",
    "category": "Technology",
    "description": "As demand for PCs continues to surge during a time of industry-wide component shortages, HP Inc. is grappling with a massive backlog on PC orders. In an interview with CRN on Friday, HP CEO Enrique Lores detailed how the company is dealing with its roughly $10 billion PC backlog and the outlook for the situation improving for partners.At the end of HP’s current quarter in late October, “we expect to be—fortunately and unfortunately—at a similar level” in terms of backlog, Lores said. Through measures focused on securing key components, “you will see a gradual improvement over the next quarters,” he said during the interview at HP’s headquarters in Palo Alto, Calif.The wide-ranging interview also included a discussion of HP’s planned acquisition of remote computing firm Teradici, the Windows 11 rollout, Apple’s push for business customers and HP’s strategy around processors. Held ahead of the virtual HP Reinvent partner conference on Thursday, other topics covered by Lores included expanding HP’s Instant Ink subscription service to SMBs, the company’s 3-D printing business, the shift to hybrid work and the next phases for HP’s print and personal systems businesses."
  },
  {
    "id": 26,
    "title": "  Apple iPhone14 launch in india in   Octobar deals you can grab right now under Rs59000 ",
    "Image": "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-hero-220907-geo_Full-Bleed-Image.jpg.large.jpg",
    "category": "Technology",
    "description": " iPhone 14 and iPhone 14 Plus take stunning photos and video with a powerful camera system featuring new Main and front TrueDepth cameras, the Ultra Wide camera for unique perspectives, and Photonic Engine — an enhanced image pipeline. Both models include the A15 Bionic chip with a 5-core GPU, which offers incredible performance and efficiency for demanding workloads, and is designed with privacy and security built in. iPhone 14 and iPhone 14 Plus introduce critical safety capabilities such as Crash Detection and Emergency SOS via satellite, a first in the industry. And with amazing battery life, industry-leading durability features, and super-fast 5G, this iPhone lineup is more advanced than ever before. iPhone 14 and iPhone 14 Plus will be available in midnight, blue, starlight, purple, and (PRODUCT)RED1 finishes. Pre-orders begin Friday, September 9, with availability for iPhone 14 beginning Friday, September 16, and availability for iPhone 14 Plus beginning Friday, October 7."
  },
  {
    "id": 27,
    "title": "Instagram launches exclusive ‘1 minute music’ tracks for Reels ",
    "Image": "https://images.indianexpress.com/2021/12/Instagram-AP-1.jpg",
    "category": "Technology",
    "description": "Instagram has launched a new exclusive ‘1 Minute Music’ track for its Reels, which is a set of music tracks and videos, exclusively available on its platform.The new 1-minute music set includes music from 200 artists across India, including the likes of Dhvani Bhanushali, Neeti Mohan, Shaan, Himanshi Khurana, Anirudh and GV Prakaash Kumar. The Meta-owned platform believes that will make your Instagram content more entertaining, and inspire other artists to release their one-minute music on the platform as well.“Music is a catalyst for trends on Instagram today. In fact, Reels is becoming the platform for people to discover music and artists too. With ‘1 Minute Music’, we’re now giving people access to an exclusive set of tracks they could use to make their reels more entertaining. We’re also hoping this platform serves as a paradigm for established and emerging artists to share their own music, and create their own videos, all on Reels,” said Paras Sharma, Director, Content & Community Partnerships, Facebook India (Meta).The music will be accompanied by music videos, which too will be available exclusively on Instagram.  Music distribution and artist services company, Believe, has worked with Instagram for this association"
  },
  {
    "id": 28,
    "title": "The iPad is a brand of iOS and iPadOS-based tablet computers that are developed by Apple Inc. The iPad was conceived before the related iPhone but the ... ",
    "Image": "https://www.cultofmac.com/wp-content/uploads/2016/03/DSC07633-1.jpg?ezimgfmt=ng:webp/ngcb24",
    "category": "Technology",
    "description": "At first glance, the iPad looks like an iPhone or iPod touch on steroids. It's much larger than those two related devices, yet smaller than a notebook computer. Its sleek finish and unique engineering scream Apple design. Some critics complained that the iPad was just a big iPod Touch. And just as the company had changed the smartphone business with the release of the iPhone, Apple changed the tablet business. Or, rather, Apple created the tablet business: With the launch of the iPad, Apple created a market for touch-based devices designed for watching videos and browsing the web and reading digital books and e-mailBetween the debut of the iPad in early 2010 and the release of the fourth iPad revision in late 2012, Apple sold more than 100 million tablets [source: New York Times]. At $500 or more apiece, it's safe to say the iPad has been a tremendous success. And since the release of its original model, Apple has modified and improved the iPad with faster internals and a higher resolution screen to keep it ahead of the competition."
  },
  {
    "id": 30,
    "title": "In addition to soon-to-be-launched OXO, an indigenous hi-speed electric motorcycle; HOP's generation upgrade of the 125-km range LYF scooter (internally named  ",
    "Image": "https://content.jdmagicbox.com/comp/navsari/k5/9999p2637.2637.220404151030.y3k5/catalogue/jagjit-electric-two-wheelers-and-three-wheelers-sattapir-navsari-xb1796mj21.jpg?clr=",
    "category": "Technology",
    "description": "With a huge jump in ebike ownership in the last 7 years and plenty of room to grow, the U.S. electric bike market will continue to expand quickly. Some analysts predict that within 10-15 years, U.S. will become one of the largest electric bike markets in the world, with millions of ebikes sold each year.it's a simple brushless motor from a PC cooling fan, but it works in broadly the same way as a bike's hub motor. There's a static part made up of four electromagnet coils (left) and a rotating part (right) made from a permanent magnet (the gray ring) that clips."
  },
  {
    "id": 31,
    "title": "Tips to do a perfect headstand",
    "Image": "https://images.healthshots.com/healthshots/en/uploads/2021/06/30174448/HIIT-pilates-1-370x207.jpg",
    "category": "Fitness",
    "description": "Referred to as the ‘king’ of asanas, headstand is an advanced yoga inversion. For beginners, it might seem that a headstand turns the world upside down. However, Anshuka Parwani, the celebrity yoga trainer, shared an Instagram post saying, “It looks intimidating, but once you build up to it, it becomes so easy. If you have never done one before, please make sure you practice with a certified teacher first. The procedure, as laid down by the yoga trainer is as follows Start with Vajrasana (diamond pose) and grab opposite elbows.Interlock your fingers and reduce the space between your elbows.Make sure your shoulders are nice and protracted and raise your knees.Activate your core, walk in and raise one knee to your chest and then the other and hold this position.Stay for a few seconds and build your strength.Extend one leg all the way to the top.When you feel more confident, extend the other leg.”"
  },
  {
    "id": 32,
    "title": " Baba Ramdev to donate robe, shoes for wax figure at Madame Tussauds",
    "Image": "https://images.moneycontrol.com/static-mcnews/2017/08/Baba-Ramdev-e1519366990666.jpg",
    "category": "Fitness",
    "description": "Yoga guru Baba Ramdev will donate his iconic saffron robe and a pair of his shoes to be used for his wax figure at Madame Tussauds here.The co-founder of the Patanjali Ayurved Limited, who was in London for a sitting for his figure, will be seen striking the ‘Vrikshasana’ (tress posture) yoga pose.The team of Madame Tussauds expert artists took over 200 specific measurements, as well as photographs of Ramdev to create an authentic likeness.“I am extremely pleased to be chosen by Madame Tussauds Delhi. The team is supremely talented; they were dedicated throughout the sitting experience. They have motivated me to keep inspiring and delivering the best to my followers. I am very much looking forward to seeing the finished figure,” Ramdev said."
  },
  {
    "id": 33,
    "title": "Shilpa Shetty performs yoga while on vacation: Don’t take a detour from your ‘fitness road’ ",
    "Image": "https://www.zoomnews.in/uploads_2019/newses/shilpa-shetty-kundra-will-unveil-something-exciting-ahead-of-ganesh-chaturthi_524169932_sm.jpg",
    "category": "Fitness",
    "description": "Shilpa Shetty Kundra, who often sets fitness goals with her workout sessions, yet again took to Instagram to share an exercise video — while vacationing in London.The 47-year-old ditched the cliché holiday pictures and instead treated her fans to a video of herself doing yoga asanas. In the clip, her sister Shamita Shetty can also be seen working out in the background.This time, the Nikamma actor could be seen performing ‘Gatyatamak Eka Pada Uttanasana Pawanmuktasana’ followed by ‘Naukasana’ and its variations for core strengthening. “Even if you’re in #VacayMode, don’t take a detour from your fitness road,” she captioned the video, attributing it to be the “motivation to start my day (even if I’m on a holiday with a 3-times-a-week fitness routine).”"
  },
  {
    "id": 34,
    "title": "Watch: Virat Kohli impresses with his powerful ‘cleans day’ workout ",
    "Image": "https://c.ndtvimg.com/virat-kohli_625x300_1529408914954.jpg",
    "category": "Fitness",
    "description": "Consistency, patience, and discipline are extremely essential to reaching one’s fitness goals. If you are willing to take on the challenge, then you might want to learn some power moves from none other than Virat Kohli.The batsman, a fitness buff, often takes to social media to share his impressive workout routines. And recently, he dropped another video showcasing a power-packed workout. He also explained that power clean helps to increase “muscular coordination, leading to better power output, and enhancing overall athletic capacity”. “Such kinds of explosive compound movements yield great results not only in power and force output but also kinesthetic awareness, and neurological adaptations, which is required by athletes to train harder and run faster,” the expert mentioned.It is best to perform the exercise under guidance, especially for beginners. Also, if one has back, shoulders, or lower body joint niggles, avoid doing the power clean. During movement, if there is any pain or discomfort, it is best to discontinue and do basic stretches."
  },
  {
    "id": 35,
    "title": "Malaika Arora’s weekly fitness routine shows she is both a ‘gymmer’ and a ‘yogi’",
    "Image": "https://static.toiimg.com/thumb/56335775.cms?width=400&height=300&resizemode=4",
    "category": "Fitness",
    "description": " While regular practice of yoga is great for the overall health of a person, gym sessions ensure they stay active on the regular. One does not have to do both on a given day, they can take cues from Arora on how to spread the two exercises out through the course of the week. “Who says gymmers can’t be yogis? I believe in yoga and gym balance. To move, you don’t need to restrict yourself to one kind of exercise,” she captioned a video, which showed the actor and model doing yoga on a Monday by stretching one of her legs behind her and holding it with her hand, and then walking on a treadmill on Tuesday. "
  },
  {
    "id": 37,
    "title": "Should yoga be done on an empty stomach? Here’s what experts say ",
    "Image": "https://elcomercio.pe/resizer/wyWyM0ko2xtaSKDo8-7OW7Z-nvo=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/Y3OMKEZWBNHLDFEPJYGDPTXUFE.png",
    "category": "mix",
    "description": "o one will understand you or your body the way you do so make sure you listen to it, protect it, do good things for it and celebrate it,” they saidYoga is now the preferred choice of many, to stay fit, active and agile. It helps in numerous ways, be it in improving flexibility, strength and posture, or reducing stress and providing a sense of calm. Nutrition and diet are an important part of fitness along with physical exercise. On that account, it becomes necessary to understand whether yoga should be done on an empty stomach or notAnshuka Parwani, a yoga expert, and Pooja Makhija, a nutritionist took to Instagram to talk about this dilemma that many face.Pooja believes that it’s important to have something before starting with your exercise in the morning. It should be quite light and not too heavy to kickstart your metabolism.While both have contrasting opinions, they strongly agreed and upheld the point that you know your body better than anyone else. Hence, it’s important to observe and understand what your body is trying to tell you and do as one may deem fit. They said, if practising yoga on an empty stomach is suiting you better, do that. On the other hand, if it feels like you need something to get a better start, follow that as a part of your routine.    "
  },
  {
    "id": 36,
    "title": " World Hypertension Day 2022: Five restorative yoga poses for high blood pressure",
    "Image": "https://previews.123rf.com/images/belchonock/belchonock1901/belchonock190111617/116261953-young-woman-visiting-doctor-in-hospital-closeup-measuring-blood-pressure-and-checking-pulse.jpg",
    "category": "Fitness",
    "description": "An estimated 26 per cent of the world’s population or roughly 972 million people have hypertension; and this number is set to increase to 29 per cent by 2025, according to National Center for Biotechnology Information (NCBI). Hypertension is essentially high blood pressure, and those who suffer from it may not exhibit any symptoms initially as it develops over the course of many years. This lack of symptoms makes it undetectable in time to prevent it or take remedial action, experts say.“Holistic practices like yoga, meditation, and mindfulness, help handle stress in a productive and effective manner. Devote your efforts to a regular practice of yogic techniques like asanas, pranayama, and meditation practice that will guarantee your physical, mental, emotional, and spiritual well-being,” said Grand Master Akshar, a yoga master."
  },
  {
    "id": 37,
    "title": "Inspired by Mirabai Chanu, Tiger Shroff amps up his fitness game as he lifts 140kg weights",
    "Image": "https://images.news18.com/ibnlive/uploads/2022/07/sports-25-2.png",
    "category": "Fitness",
    "description": "Mirabai Chanu lifted the nation’s spirits when she bagged a silver medal at the Tokyo Olympics recently. She clinched the country’s first weightlifting silver in the 49kg category, ending India’s 21-year wait for a weightlifting medal at the coveted multi-sport event.The 26-year-old athlete’s historic victory was met with applauds and praises from all corners of the country. Her grit and passion further inspired many to work towards their fitness. Actor Tiger Shroff, too, got hugely inspired by the medalist as he posted a video of himself lifting heavyweights. He also showered wishes for the Indian contingent at the Tokyo Olympics.“140kg and counting…so so inspired to get stronger and go beyond my limits thanks to #mirabaichanu what a performance! go team India! #tokyoolympics,” he captioned the video in which he is seen lifting heavy-weight while doing sit-ups. Take a look."
  },
  {
    "id": 38,
    "title": "Exercise Reduces Risk of Type 2 Diabetes, Studies Show ",
    "Image": "https://www.gymtechreview.com/wp-content/uploads/man-and-women-running-through-the-park-together.jpg",
    "category": "Fitness",
    "description": "Being physically active can help reduce the risk of developing type 2 diabetes. A recent study in Diabetes Care found that women who get more steps have a lower risk of developing diabetes, compared to women who are more sedentary.1And a study in the journal Metabolites found that men who are more active have a lower risk of developing type 2 diabetes compared to men who are more sedentary.2 It seems that physical activity significantly changes the body’s metabolite profile, and many of these changes are associated with a lower risk of type 2 diabetes, says Maria Lankinen, PhD, research scientist, Institute of Public Health and Clinical Nutrition at the University of Eastern Finland, and one of the researchers on the study published in Metabolites. Increased physical activity also improved insulin secretion.The study published in Diabetes Care focused on 4,838 older women (median age 78.9) without diabetes, who were followed for up to 6.9 years. Their steps were monitored by accelerometers to account for the number of steps and the intensity of steps, which were labeled as light-intensity or moderate- to vigorous-intensity.For diabetes among older adults, our findings indicate that moderate- to vigorous-intensity steps were more strongly associated with a lower risk of diabetes than light-intensity steps, adds John Bellettiere, PhD, an assistant professor of family medicine and public health at UC San Diego, and a co-author on the study."
  },
  {
    "id": 39,
    "title": "Exercise Improves Brain Fitness as You Age ",
    "Image": "https://www.verywellfit.com/thmb/GO6ZNMAt2wgFWBBrMP3sYzN8F3o=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-726775975-e35ebd2a79b34c52891e89151988aa02.jpeg",
    "category": "Fitness",
    "description": "Researchers recruited 105 men and women aged 70 to 77 and split them into three groups. The first performed supervised exercise twice a week with high-intensity interval training (HIIT) at a 90% peak heart rate. The second did moderate-intensity training at 70% peak heart rate. The third, a control group, did at least 30 minutes of daily activity, but at a low intensity and didn't have heart rate measured.There was one major aspect of improvement that wasn't related to heart rate or cortical thickness, Dr. Haberg adds—it was whether the participants felt control over their choices. For example, those who were able to choose their activity, where they exercised, and whether they exercised alone or with a training buddy tended to have more beneficial outcomes.rforming an activity chosen by the individual is key to better brain health, says Haberg. Also, diligently following physical activity guidelines provides a significant cardiorespiratory effect in healthy older adults. That type of control also can be part of maintaining a regular fitness routine, previous research suggests, because it can lead to greater enjoyment with exercise. For example, one study notes that about 50% of participants in exercise programs drop out in the first 6 months, but that those who feel positive emotions tend to have significantly higher levels of program adherence"
  },
  {
    "id": 40,
    "title": "Walking Shoe Types and Buying Tips",
    "Image": "https://images.indianexpress.com/2020/08/GettyImages-walking-regularly_759.jpg",
    "category": "Fitness",
    "description": "Walking shoes are your most important item of walking gear. Not only do you want to choose the best pair for your health and performance, but you also want to make sure that you are spending your money wisely.It's helpful to know what to look for in a good fitness walking shoe and how to understand that the pair you pick is the right set of shoes for your walking style.There's no one best shoe for all walkers. The best shoe for you is the one that fits you best. It should give you proper support, flexibility, and cushioning and compensate for any stride problems you may have, such as overpronation. Each person's feet are differentIt can be hard to determine all of that on your own, however. Find a shoe fitting expert to help you discover the best shoe for your walking distance, speed, style, and surface, as well as your weight and stride. The best place to find that person is at the most serious running shoe store in your area.Once you have found a shoe that fits you right, you may become more familiar with shoe lasts and shapes so that you can make your own selections in the future.Shoe manufacturers put the best design and technology into running shoe styles while walking shoe styles are designed primarily for market appeal rather than performance."
  },
  {
    "id": 41,
    "title": "In latest edition of bizarre food experiment, Egg Maggi",
    "Image": "https://images.moneycontrol.com/static-mcnews/2022/01/ikhsan-baihaqi-RwAXb8Hv_sU-unsplash.jpg?impolicy=website&width=620&height=450",
    "category": "Food",
    "description": "Eating the same food regularly may make people lose interest. Hence, often people come up with creative takes to spice it up. However, in order to reinvent people’s favourite Maggi, a street vendor decided to come up with a fruity fix — by adding eggs!Yes, while adding vegetables and other add-ons like egg, chicken or cheese are favoured combinations when it comes to the instant noodles, it has often seen experiments with something sweet before. From unusual cotton candy Maggi to obnoxious Maggi laddu and kheer, desi people on the internet have seen it all. However, it’s the first time fruit was seen being added to it.In a video shared on Instagram by The Great Indian Foodie, a woman is seen making Maggi on a big tawa (skillet), frying the masala in ghee and adding some water before putting the instant noodles in. However, taking inspiration from the previously viral Fanta Maggi, she is seen adding Mango juice to the pan. But what happens next really left all terrified online"
  },
  {
    "id": 42,
    "title": "International Burger Day: 5 Non-Vegetarian Burger Recipes You Must Try",
    "Image": "https://c.ndtvimg.com/2022-04/k9toe6b8_burger_625x300_23_April_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
    "category": "Food",
    "description": "Can we call burgers the ultimate comfort food? May be yes! It is because we are running out of options to describe the lip-smackingly delicious snack. Loaded with cheese and mayonnaise, the oh-so-soft buns and the crispy patty have the power to lift our mood at any given day. After all, it is the hearty burgers we are talking about. Be it for breakfast or lunch or dinner, we are always ready for a wholesome burger. And, things get all the better if you have some juicy non-vegetarian burger options to pick from. Relatable, did we hear?! Well, in that case, we have some amazing recipes waiting for you.For the ones who love to relish the taste of lamb with chilli sauce, this recipe is your stop. The soft lamb patty between the buns with the punch of lettuce, and bell peppers, can make you want to have it again and again.The taste of your favourite main course dish combined with a crispy patty screams taste. The soft burger buns with heavenly chicken roasted in the makhana gravy can your tastebuds on a joy ride. Isn't it sound amazing?"
  },
  {
    "id": 43,
    "title": "This viral recipe for ice pizza has left netizens puzzled",
    "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5pGUKzTKYfFjQ93E69y2Ac5shbbrUBNi5tXaOAob-KU3KKN1ULYNDyORCm_kKOl0Qehc&usqp=CAU",
    "category": "Food",
    "description": "If you are on social media, you would have definitely come across some bizarre food videos that left you scratching your head. The latest addition to such food experiments is the ‘ice pizza’. Yes, you read that right!Shared by an Instagram page — ‘Does He Bake Dough’ — the ice pizza recipe has gone viral on the internet, amassing over 1 lakh views and thousands of comments The video shows the chef kneading a soft dough and spreading it with his hands. His next step is what has left netizens puzzled — he topped the dough with three ice cubes before finally placing it into the oven. Next, the chef takes out the freshly baked pizza from the oven and drizzles grated cheese and some condiments over it."
  },
  {
    "id": 44,
    "title": "From vada pav to falooda: Popular street foods you must try in Mumbai",
    "Image": "https://d3pc1xvrcw35tl.cloudfront.net/images/1103x827/v_20171132280.jpg",
    "category": "Food",
    "description": "From Varanasi's baati chokha ko Delhi's golgappas, every city has distinct culinary offerings which reflect the food culture of the place. Here, we bring to you some amazing street food options which are a must-have when you are in Mumbai next. Mumbai's street food begins with vada pav, vegetarian dish which consists of potato patties placed inside a pav (soft bun). But this street delicacy is incomplete without the peanut, garlic and red chilli spread it is served with. Your trip to Mumbai will be incomplete without a hot crispy vada pav.Every city has it's own version of pani puri or golgappa, and Mumbai has it too. The hollow, puffed, round dough ball is filled with a spicy potato-based mixture and dipped in masala water. The ones served in the city are much sweeter."
  },
  {
    "id": 45,
    "title": "When to Have Breakfast, Lunch and Dinner to Get Maximum Benefits?",
    "Image": "https://images.news18.com/ibnlive/uploads/2022/01/untitled-design-1-8-16412180333x2.png?impolicy=website&width=510&height=356",
    "category": "Food",
    "description": "When we wake up, the first thing that comes to put mind is what to have for breakfast. After finishing it, we start thinking about lunch and then about dinner. This shows that food is one of the most important parts of our lives. One day we skip a meal, and our body starts reacting in a different way. While what we eat matters, another thing that plays a part is when we eat our meals. The time of having breakfast, lunch and dinner are vital to determine many health benefits. There is a common saying, “Early to bed, early to rise, makes us healthy, wealthy and wise.” Let’s turn it up a little and say, early dinner and early breakfast are all you need to be healthy and smart.Breakfast: Breakfast is the first meal of the day which makes our guts wake up. Usually, breakfast is eaten after 8 to 10 hours of having our dinner. The best time to have the first meal of the day is between 7 am to 9 am.Lunch: When you eat your breakfast early, it gives your stomach enough time to rest before you go on to your lunch. This aids digestion of breakfast. The best time to have lunch is between 12 noon to 2 pm. Dinner: As you have had your lunch early, you might feel hungry soon in the evening. Many dieticians recommend having early dinner in order to satisfy our hunger as well as boost metabolism. You should have your dinner between 6.30 pm to 8 pm.  If you have all your meals on a scheduled time daily, then it can help you boost your metabolism. In the morning, your metabolic rate works best, and as the day passes, it slows down. Therefore, having an early breakfast gives it a boost and an early dinner help it sustain."
  },
  {
    "id": 46,
    "title": "When to Have Breakfast, Lunch and Dinner to Get Maximum Benefits?",
    "Image": "https://m.belfasttelegraph.co.uk/life/weekend/212db/39539413.ece/AUTOCROP/w620/2020-09-19_lif_62269554_I2.JPG",
    "category": "food",
    "description": "When we wake up, the first thing that comes to put mind is what to have for breakfast. After finishing it, we start thinking about lunch and then about dinner. This shows that food is one of the most important parts of our lives. One day we skip a meal, and our body starts reacting in a different way. While what we eat matters, another thing that plays a part is when we eat our meals. The time of having breakfast, lunch and dinner are vital to determine many health benefits. There is a common saying, “Early to bed, early to rise, makes us healthy, wealthy and wise.” Let’s turn it up a little and say, early dinner and early breakfast are all you need to be healthy and smart.Breakfast: Breakfast is the first meal of the day which makes our guts wake up. Usually, breakfast is eaten after 8 to 10 hours of having our dinner. The best time to have the first meal of the day is between 7 am to 9 am.Lunch: When you eat your breakfast early, it gives your stomach enough time to rest before you go on to your lunch. This aids digestion of breakfast. The best time to have lunch is between 12 noon to 2 pm. Dinner: As you have had your lunch early, you might feel hungry soon in the evening. Many dieticians recommend having early dinner in order to satisfy our hunger as well as boost metabolism. You should have your dinner between 6.30 pm to 8 pm.  If you have all your meals on a scheduled time daily, then it can help you boost your metabolism. In the morning, your metabolic rate works best, and as the day passes, it slows down. Therefore, having an early breakfast gives it a boost and an early dinner help it sustain."
  },
  {
    "id": 46,
    "title": "What The Fork: Kunal Vijayakar on the Perfect Summer Food to Beat the Heat",
    "Image": "https://images.news18.com/ibnlive/uploads/2022/05/curd-rice-1-16519277623x2.jpg?impolicy=website&width=510&height=356",
    "category": "Food",
    "description": "​​ How soon we renounce age-old traditions in the praxis of food, and succumb to the allure of convenience, short cuts, and finished good-looking products. I’m talking about age old dahi or curd. In my grandmother’s home where I lived for the first 15 years of my life and even when we moved lock stock and tapeli to where my parents made their new home, dahi was always made in the kitchen. It was a daily process. Every day milk would be boiled and cooled to room temperature. A medium-heavy bottomed pot would be greased with the previous day’s dahi, which worked like a bacterial curd starter, and the boiled warm milk would be poured in. A wet cloth kept the milk covered as nature created magic, fermented the milk, added wonderfully healthy probiotic characteristics, thickened it and set it to curd. It would take four to five hours on a normal warm, hot and humid Mumbai day, eight to 12 in cold weather, that was it. Sometimes we’d make curd two times a day, just to be able to have it fresh. There was also a kind of romantic uncertainty about how well the curd would set. Sometimes it could set loosely, separating the water from the milk and sometimes it would be firm and silky. After all milk wasn’t bought homogenised, standardised and in a carton, but was bought at the doorstep from a doodhwala, whose honesty was always in question. So obviously, the better the milk the better the curd. The pot of milk with the curd starter would always be kept in a warm place and most importantly left alone. One old ladies’ tale was that you could add a green chilly with its stem intact to help the curd set faster. Ostensibly, the chilly with the stem would not impart any taste but contained certain bacteria that activated the milk to produce protein curdles that turned milk into curd faster. I’d actually never seen that happening in any of our kitchens."
  },
  {
    "id": 47,
    "title": "Mutton curry from Telangana, a Manipuri fish stew and a reimagined Punjabi classic",
    "Image": "https://i.ytimg.com/vi/AghxnFuabSs/maxresdefault.jpg",
    "category": "Food",
    "description": "These three different dishes from across the country are united by only one thing: they taste great.Indian cuisine is not just about Punjabi or Tamil food, or, for that matter, Malayali food. There are many dishes across the country that are waiting to be explored. For example, how different is the cuisine of Telangana, the country’s newest state, from Andhra Pradesh’s? Or, what’s the one Manipuri fish stew that you’ve got to have? Plus, to ensure that there’s also some familiar food on the table, we’ve got a foodie to look at Butter Chicken in a different way."
  },
  {
    "id": 48,
    "title": "Fruits and Vegetables are Losing Their Nutrient Value, Know the Risks",
    "Image": "https://images.news18.com/ibnlive/uploads/2021/12/untitled-3-276-16409377143x2.jpg?impolicy=website&width=510&height=356",
    "category": "Food",
    "description": "Every now and then, we stress upon the fact of eating lots of fruits and vegetables as they are packed with nutrients. They are said to be the best way to provide nutrition to the body and boost immunity. Every season comes with a variety of grains, vegetables, and fruits and we can’t agree more that they are tastier than the stored ones. However, do you know with time the nutrition value of fruits and vegetables are declining? Yes, you read that right. With time, due to various reasons that nutrition in fruits and vegetables have declined tremendously leaving us with various deficiencies. According to a National Geographic report, the experts find the root of the problem in the quality of soil. In the last few decades, the soil quality has been compromised due to various reasons including excessive chemical use, fertilisers, irrigation and so on. The harvesting methods have changed from natural ways to machineries which has also taken a dig at the health of the soil. Apart from it, due to global warming and climate change, the atmospheric temperature is rising and making the soil lose its moisture even more that do not hold the crops well putting them in risk of losing nutrition.The report also states that due to carbon dioxide increase in the air, the nutrient content of the fruits, vegetables and other crops are pulling down.David R. Montgomery, a professor of geomorphology at the University of Washington in Seattle emphasis on one of the major risks of the lower nutrient value, that is making our immunity low. According to him, “Nutrient decline is going to leave our bodies with fewer of the components they need to mount defences against chronic diseases — it’s going to undercut the value of food as preventive medicine,” state National Geographic."
  },
  {
    "id": 49,
    "title": "Three tips to make the perfect dosa batter at home",
    "Image": "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/wajncrifarncpyyus4bd",
    "category": "Food",
    "description": "Dosas or dosais, are ubiquitous in South India and relished by food enthusiasts across the globe. A savoury, thin pancake made from a fermented batter, dosas are usually made with a mixture of lentils and rice and served with a side of sambhar and coconut chutney.Making dosas at home can be a tricky affair, especially if you don’t get the nuances right. As such, when food expert Uma Raghuraman took to Instagram to share the secrets behind the perfect dosa batter, we couldn’t help but share it with you."
  },
  {
    "id": 58,
    "title": "These Harmless foods are Perfect for Cancer Patients",
    "Image": "https://prostatecancernewstoday.com/wp-content/uploads/2016/10/BNS_3_Artboard-343-copy-213.png",
    "category": "mix",
    "description": "he nutrition needs of people with cancer vary from person to person. Your cancer care team can help you identify your nutrition goals and plan ways to help you meet them.Eating well while you’re being treated for cancer would help you: 1) Feel better2) Keep up your strength and energy3) Maintain your weight and your body’s store of nutrient4) Better tolerate treatment related side effects 5) Lower your risk of infections6) Heal and recover fasterEating well means eating a variety of foods to get the nutrients your body needs to fight cancer. These nutrients include proteins, fats, carbohydrates, water, vitamins, and minerals. "
  },
 
  
  ]);
  return (
    <div>
      <store.Provider value={[details, setDetails]}>

        {props.children}


      </store.Provider>
    </div>
  )
}

export default Details