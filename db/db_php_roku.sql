-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Apr 08, 2020 at 06:36 PM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_php_roku`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_arating`
--

CREATE TABLE `tbl_arating` (
  `arating_id` smallint(5) UNSIGNED NOT NULL,
  `arating_name` varchar(125) NOT NULL,
  `arating_desc` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- Dumping data for table `tbl_arating`
--

INSERT INTO `tbl_arating` (`arating_id`, `arating_name`, `arating_desc`) VALUES
(1, 'G', 'G – General Audiences\r\nAll ages admitted. Nothing that would offend parents for viewing by children. '),
(2, 'PG', 'PG – Parental Guidance Suggested\r\nSome material may not be suitable for children. Parents urged to give  	&ldquo;parental guidance&rdquo;. '),
(3, 'PG-13', 'PG-13 – Parents Strongly Cautioned\r\nSome material may be inappropriate for children under 13. Parents are urged to be cautious. Some material may be inappropriate for pre-teenagers.'),
(4, 'R', 'R – Restricted\r\nUnder 17 requires accompanying parent or adult guardian. Contains some adult material. Parents are urged to learn more about the film before taking their young children with them. '),
(5, 'NC-17', 'NC-17 – Adults Only\r\nNo One 17 and Under Admitted. Clearly adult. Children are not admitted. '),
(6, 'TV-PG', 'TV-PG - Programs rated TV-PG may contain some material that parents or guardians may find inappropriate for younger children.'),
(7, 'TV-14', 'TV-14 - Programs rated TV-14 contains material that parents or adult guardians may find unsuitable for children under the age of 14.'),
(8, 'TV-Y', 'TV-Y - Programs rated TV-Y are designed to be appropriate for children of all ages.'),
(9, 'TV-Y7', 'TV-Y7 - This program is designed for children age 7 and above.'),
(10, 'No Rating', 'Not Rated');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_comments`
--

CREATE TABLE `tbl_comments` (
  `comments_id` mediumint(8) UNSIGNED NOT NULL,
  `comments_auth` varchar(125) NOT NULL,
  `comments_copy` text NOT NULL,
  `comments_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_decade`
--

CREATE TABLE `tbl_decade` (
  `decade_id` int(11) NOT NULL,
  `decade` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_decade`
--

INSERT INTO `tbl_decade` (`decade_id`, `decade`) VALUES
(1, '50s'),
(2, '60s'),
(3, '70s'),
(4, '80s'),
(5, '90s');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_genre`
--

CREATE TABLE `tbl_genre` (
  `genre_id` tinyint(3) UNSIGNED NOT NULL,
  `genre_name` varchar(125) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_genre`
--

INSERT INTO `tbl_genre` (`genre_id`, `genre_name`) VALUES
(1, 'Action'),
(2, 'Adventure'),
(3, 'Comedy'),
(5, 'Drama'),
(6, 'Thriller'),
(7, 'Horror'),
(8, 'Musical'),
(9, 'Science Fiction'),
(13, 'Family'),
(14, 'Fantasy'),
(15, 'Romance');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_movies`
--

CREATE TABLE `tbl_movies` (
  `movies_id` mediumint(8) UNSIGNED NOT NULL,
  `movies_cover` varchar(75) NOT NULL DEFAULT 'cover_default.jpg',
  `movies_title` varchar(125) NOT NULL,
  `movies_rating` varchar(10) NOT NULL,
  `movies_year` varchar(5) NOT NULL,
  `movies_runtime` varchar(25) NOT NULL,
  `movies_storyline` text NOT NULL,
  `movies_trailer` varchar(75) NOT NULL DEFAULT 'trailer_default.jpg',
  `movies_release` varchar(125) NOT NULL,
  `isadmin` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_movies`
--

INSERT INTO `tbl_movies` (`movies_id`, `movies_cover`, `movies_title`, `movies_rating`, `movies_year`, `movies_runtime`, `movies_storyline`, `movies_trailer`, `movies_release`, `isadmin`) VALUES
(1, 'birds.jpg', 'Birds', 'PG-13', '1963', '119 minutes', 'Melanie, a rich socialite, follows Mitch, a lawyer, to his home in Bodega Bay to play a practical joke on him. Things take a bizarre turn when the birds in the area begin to attack the people there.\r\n', 'birds.mp4', 'March 28, 1963', 1),
(2, 'rearwindow.png', 'Rear Window', 'PG', '1954 ', '112 minutes', 'Professional photographer Jeff is stuck in his apartment, recuperating from a broken leg. Out of boredom, he begins to spy on his neighbours and comes across a shocking revelation.', 'rear_window.mp4', 'August 4, 1954', 1),
(3, 'runlola.jpg', 'Run Lola Run', 'R', '1998', '80 minutes', 'Lola has 20 minutes to bring 100,000 DM to her boyfriend or he robs a store. If the money is not returned, there will be consequences. We see three possible scenarios, depending on Lola\'s encounters.\r\n', 'run_lola.mp4', 'August 20 1998', 1),
(4, 'vertigo.jpg', 'Vertigo', 'PG', '1958', '128 minutes', 'Detective Scottie who suffers from acrophobia is hired to investigate the strange activities of an old friend\'s wife. She commits suicide while Scottie becomes dangerously obsessed with her.\r\n', 'vertigo.mp4', 'January 1, 1958', 1),
(5, '10things.jpg', '10 Things I Hate About You', 'PG-13', '1999', '99 minutes', 'A high-school boy, Cameron, cannot date Bianca until her antisocial older sister, Kat, has a boyfriend. So, Cameron pays a mysterious boy, Patrick, to charm Kat.\r\n', '10things.mp4', 'March 31, 1999', 1),
(6, 'prettyinpink.jpg', 'Pretty In Pink', 'PG-13', '1986', '96 minutes', 'Andie, a young girl, is not popular at school. She mostly kept to her friend Iona and childhood sweetheart, Duckie. But what happens when one of the popular guys at school, falls in love with her.', 'prettyPink.mp4', 'March 6, 1986', 1),
(7, 'romeo.jpg', 'Romeo and Juliet', 'Not Rated', '1954', '138 minutes', 'In this classic Shakespearean story, long-time adversarial families the Capulets and the Montagues engage in a street brawl, which results in a decree declaring that the next conflict will be punishable by death. But during an opulent masked ball, young Romeo Montague (Laurence Harvey) falls in love with Juliet Capulet (Susan Shentall). With the family feud reignited, Juliet\'s cousin kills Romeo\'s friend, Mercutio (Ubaldo Zollo), placing the young lovers in grave danger.', 'romeo.mp4', 'September 1, 1954', 1),
(8, 'grease.jpg', 'Grease', 'PG-13', '1978', '1h 51minutes', 'While vacationing in Australia, Danny and Sandy indulge in a passionate love affair with each other. They part ways believing they will not see each other again but fate has other plans.\r\n', 'grease.mp4', 'June 16, 1978', 1),
(9, 'singingintherain.jpg', 'Singin\' In The Rain', 'G', '1952', '1h 43minutes', 'When the transition is being made from silent films to `talkies\', everyone has trouble adapting. Don and Lina have been cast repeatedly as a romantic couple, but when their latest film is remade into a musical, only Don has the voice for the new singing part. After a lot of practise with a diction coach, Lina still sounds terrible, and Kathy, a bright young aspiring actress, is hired to record over her voice.\r\n', 'singing_rain.mp4', 'March 27, 1952', 1),
(10, 'bclub.jpg', 'The Breakfast Club', 'R', '1985', '1h 37m', ' Five high school students from different walks of life endure a Saturday detention under a power-hungry principal (Paul Gleason). The disparate group includes rebel John (Judd Nelson), princess Claire (Molly Ringwald), outcast Allison (Ally Sheedy), brainy Brian (Anthony Michael Hall) and Andrew (Emilio Estevez), the jock. Each has a chance to tell his or her story, making the others see them a little differently -- and when the day ends, they question whether school will ever be the same.\r\n', 'bclub.mp4', 'February 7, 1985', 1),
(11, 'goonies.jpg', 'The Goonies', 'PG', '1985', '1h 55m', 'A group of west coast kids facing their last days together before a development paves over their homes stumble onto evidence of pirate\'s treasure attracting the attention of a family of criminals.\r\n', 'goonies.mp4', 'June 7, 1985', 0),
(12, 'mermaid.png', 'The Little Mermaid', 'G', '1989', '1h 25m', 'A beautiful mermaid called Ariel makes a deal with Ursula, a sea witch, to meet Eric, a human prince she falls in love with. However, unaware of Ursula\'s evil plans, Ariel ends up in trouble.\r\n', 'mermaid.mp4', 'November 17, 1989', 0),
(13, 'future.jpg', 'Back to the Future', 'PG', '1985', '1h 56m', 'Marty travels back in time using an eccentric scientist\'s time machine. However, he must make his high-school-aged parents fall in love in order to return to the present.\r\n', 'future.mp4', 'July 3, 1985', 0),
(14, 'landbeforetime.jpg', 'The Land Before Time', 'G', '1988', '1h 20m', 'An orphaned brontosaurus dinosaur has to face many obstacles, until he along with 4 other dinosaurs learn how to survive with each others help.\r\n', 'landbeforetime.mp4', 'November 18, 1988', 0),
(15, 'honey.jpg', 'Honey, I Shrunk the Kids', 'PG', '1989', '1h 41m', 'A scientist tries his best to get his recent invention, a shrinking machine, to work. Things go awry when he accidentally shrinks his children and throws them along with the garbage.\r\n', 'honey.mp4', 'June 23, 1989', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_mov_decade`
--

CREATE TABLE `tbl_mov_decade` (
  `mov_decade_id` int(11) NOT NULL,
  `movies_id` int(11) NOT NULL,
  `decade_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_mov_decade`
--

INSERT INTO `tbl_mov_decade` (`mov_decade_id`, `movies_id`, `decade_id`) VALUES
(1, 1, 2),
(2, 2, 1),
(3, 3, 5),
(4, 4, 1),
(5, 5, 5),
(6, 6, 4),
(7, 7, 1),
(8, 8, 3),
(9, 9, 1),
(10, 10, 4),
(11, 11, 4),
(12, 12, 4),
(13, 13, 4),
(14, 14, 4),
(15, 15, 4);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_mov_genre`
--

CREATE TABLE `tbl_mov_genre` (
  `mov_genre_id` mediumint(8) UNSIGNED NOT NULL,
  `movies_id` mediumint(9) NOT NULL,
  `genre_id` mediumint(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_mov_genre`
--

INSERT INTO `tbl_mov_genre` (`mov_genre_id`, `movies_id`, `genre_id`) VALUES
(1, 1, 6),
(2, 2, 6),
(3, 3, 1),
(4, 4, 6),
(5, 5, 15),
(6, 6, 6),
(7, 7, 6),
(8, 8, 8),
(9, 9, 8),
(10, 10, 3),
(11, 11, 13),
(12, 12, 13),
(13, 13, 9),
(14, 14, 2),
(15, 15, 3);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_shows`
--

CREATE TABLE `tbl_shows` (
  `tv_id` int(11) NOT NULL,
  `tv_cover` varchar(20) NOT NULL,
  `tv_title` varchar(50) NOT NULL,
  `tv_rating` varchar(10) NOT NULL,
  `tv_year` varchar(5) NOT NULL,
  `tv_runtime` varchar(25) NOT NULL,
  `tv_storyline` text NOT NULL,
  `tv_trailer` varchar(50) NOT NULL,
  `tv_release` varchar(50) NOT NULL,
  `isadmin` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_shows`
--

INSERT INTO `tbl_shows` (`tv_id`, `tv_cover`, `tv_title`, `tv_rating`, `tv_year`, `tv_runtime`, `tv_storyline`, `tv_trailer`, `tv_release`, `isadmin`) VALUES
(1, 'ateam.jpeg', 'The A-Team', 'TV-PG', '1983', '5 seasons', 'A team of ex-special forces soldiers on the lam from the military police (even though they didn\'t really commit the crime for which they\'d been imprisoned) leaves a trail of explosions in its wake. But Hannibal, Faceman, B.A. and Murdock always stop to help the little guy against some corrupt local bigwig before escaping the MPs once again.\r\n', 'ateam.mp4', 'January 23, 1983', 1),
(2, 'cheers.jpg', ' Cheers', 'TV-PG', '1982', '11 seasons', ' A group of people from different paths of life meet at Cheers, a bar run by Sam in Boston. They share their experiences while working and drinking at the bar.\r\n', 'cheers.mp4', 'September 30, 1982', 1),
(3, 'mash.jpeg', 'M*A*S*H', 'TV-PG', '1972', '11 seasons', 'The series is centered upon the interrelationships, stress and trauma involved in being a part of Mobile Army Surgical Hospital. They survive insuperable odds with the help of practical jokes and fun.\r\n', 'mash.mp4', 'September 17, 1972', 1),
(6, 'knightrider.jpg', 'Knight Rider', 'TV-PG', '1982', '4 seasons', 'Michael Knight is a man on a mission. Reborn, so to speak, after getting shot in the face, Knight decides to dedicate his life to fighting for justice. Self-made billionaire Wilton Knight hires Michael to be the lead field agent in his Knight Foundation\'s public justice organization, part of which includes the development of KITT (Knight Industries Two Thousand), a superpowered, intelligent souped-up Pontiac Trans-Am. KITT can drive 300 miles an hour, is bulletproof, fireproof, can talk, and helps Michael fight injustices in the world.\r\n', 'knightrider.mp4', 'September 26, 1982', 1),
(7, 'miamivice.jpg', 'Miami Vice', 'TV-14', '1984', '5 seasons', 'This series is largely remembered for the stylish clothes Detectives Sonny Crockett and Ricardo Tubbs wore, the soundtrack, and its distinct visuals. But beneath the veneer is a surprisingly dark cop show. The cocaine boom of the 1980s framed many stories about drugs and murder, with Crockett and Tubbs often resorting to violence in the course of their work.\r\n', 'miamivice.mp4', '1984', 1),
(8, 'fragglerock.jpg', 'Fraggle Rock', 'TV-Y', '1983', '5 seasons', 'The fertile imagination of Jim Henson spawned this colorful puppet program that was not only an international hit during the 1980s, but remains a much-loved favorite of viewers to this day. This series for both the young and young at heart follows the adventures of the Fraggles, a race of short, furry creatures living a carefree existence in a complex network of magical caves. When they\'re not filling their time playing games, singing songs or dancing their cares away, Gobo, Mokey, Red, Wembley and Boober Fraggle seek the sage advice of Marjory the Trash Heap, nosh on the confectionary constructions of the industrious Doozers, and attempt to stay clear of the giant beings known as Gorgs.\r\n', 'fragglerock.mp4', 'January 10, 1983', 0),
(9, 'thomas.jpeg', 'Thomas & Friends', 'TV-Y', ' 1984', '16 seasons', 'Based on a series of children\'s books, \"Thomas & Friends\" features Thomas the Tank Engine going on adventures with his fellow locomotives on the island of Sodor. Thomas is apt to get into trouble by trying too hard to be, in his words, a \"really useful engine,\" attempting to do things that are best left to bigger engines. Other members of Sir Topham Hatt\'s railway include junior engine Percy, Thomas\' best friend, who is always willing to help, and big engine Gordon -- the fastest and most powerful member of the team -- who uses his superior strength to help the smaller engines get out of trouble.\r\n', 'thomas.mp4', 'October 9, 1984', 0),
(10, 'inspectorgadget.jpg', 'Inspector Gadget', 'TV-PG', '1983', '2 seasons', 'Inspector Gadgets, now takes route to solve the mystery rooting in America.\r\n', 'inspectorgadget.mp4', 'October 24, 1983', 0),
(11, 'rugrats.jpeg', 'Rugrats', 'TV-Y', '1991', '9 seasons', '`Rugrats\' reveals the world from a baby\'s point of view. Everything looks bigger, more mysterious and uncontrollable. Angelica, the oldest, likes to terrorise her cousin, Tommy, and his friends, and is famous for screaming, \"You stupid babies!\" The adults in the series are often clueless.\r\n', 'rugrats.mp4', 'August 11, 1991', 0),
(12, 'heyarnold.jpg', 'Hey Arnold!', 'TV-Y7', ' 1996', '5 seasons', 'The adventures of Arnold, a grade-schooler who lives with his grandparents Phil and Gertrude.\r\n', 'heyarnold.mp4', 'October 7, 1996', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_shows_decade`
--

CREATE TABLE `tbl_shows_decade` (
  `shows_decade` int(11) NOT NULL,
  `shows_id` int(11) NOT NULL,
  `decade_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_shows_decade`
--

INSERT INTO `tbl_shows_decade` (`shows_decade`, `shows_id`, `decade_id`) VALUES
(1, 1, 4),
(2, 2, 4),
(3, 3, 3),
(4, 6, 4),
(5, 7, 4),
(6, 8, 4),
(7, 9, 4),
(8, 10, 4),
(9, 11, 5),
(10, 12, 5);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_shows_genre`
--

CREATE TABLE `tbl_shows_genre` (
  `shows_genre_id` int(11) NOT NULL,
  `shows_id` mediumint(9) NOT NULL,
  `genre_id` mediumint(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_shows_genre`
--

INSERT INTO `tbl_shows_genre` (`shows_genre_id`, `shows_id`, `genre_id`) VALUES
(1, 1, 1),
(2, 2, 3),
(3, 3, 3),
(4, 6, 1),
(5, 7, 1),
(6, 8, 3),
(7, 9, 13),
(8, 10, 9),
(9, 11, 13),
(10, 12, 3);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_songs`
--

CREATE TABLE `tbl_songs` (
  `songs_id` int(11) NOT NULL,
  `song_cover` varchar(100) NOT NULL,
  `song_title` varchar(100) NOT NULL,
  `song_file` varchar(50) NOT NULL,
  `song_year` varchar(5) NOT NULL,
  `song_runtime` varchar(100) NOT NULL,
  `isadmin` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_songs`
--

INSERT INTO `tbl_songs` (`songs_id`, `song_cover`, `song_title`, `song_file`, `song_year`, `song_runtime`, `isadmin`) VALUES
(1, 'heyjude.jpg', 'Hey Jude', 'heyjude.mp3', '1968', '7:11', 1),
(2, 'jailhouserock.jpg', 'Jailhouse Rock', 'jailhouserock.mp3', '1957', '2:35', 1),
(3, 'beatit.jpg', 'Beat It', 'beatit.mp3', '1982', '4:18', 1),
(4, 'dancingqueen.jpg', 'Dancing Queen', 'dancingqueen.mp3', '1976', '3:52', 1),
(5, 'stayinalive.jpg', 'Stayin’ Alive', 'stayinalive.mp3', '1977', '4:45', 1),
(6, 'sunshine.jpg', 'You Are My Sushine', 'youAreMySunshine.mp3', '1977', '2:13', 0),
(7, 'willalwaysloveyou.jpg', 'I Will Always Love You', 'willalwaysloveyou.mp3', '1974', '2:53', 0),
(8, 'footloose.jpg', 'Footlose', 'footloose.mp3', '1984', '3:48', 0),
(9, 'tiger.jpg', 'Eye of The Tige', 'tiger.mp3', '1982', '3:45', 0),
(10, 'girlsfun.jpg', 'Girls Just Wanna Have Fun', 'wannahavefun.mp3', '1983', '3:58', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_urating`
--

CREATE TABLE `tbl_urating` (
  `rating_id` tinyint(3) UNSIGNED NOT NULL,
  `rating_number` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `user_id` mediumint(8) UNSIGNED NOT NULL,
  `user_fname` varchar(250) NOT NULL,
  `user_name` varchar(250) NOT NULL,
  `user_pass` varchar(250) NOT NULL,
  `user_email` varchar(250) NOT NULL,
  `user_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_ip` varchar(50) NOT NULL DEFAULT 'no',
  `user_avatar` varchar(20) NOT NULL,
  `user_permissions` int(11) NOT NULL,
  `user_admin` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `user_fname`, `user_name`, `user_pass`, `user_email`, `user_date`, `user_ip`, `user_avatar`, `user_permissions`, `user_admin`) VALUES
(3, 'mom', 'admin', '123', 'me@you.com', '2020-03-09 15:48:21', '::1', 'friends', 5, 1),
(4, 'kid', 'kid', '123', 'me@you.com', '2020-03-09 15:49:04', 'no', 'kid', 5, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_arating`
--
ALTER TABLE `tbl_arating`
  ADD PRIMARY KEY (`arating_id`);

--
-- Indexes for table `tbl_comments`
--
ALTER TABLE `tbl_comments`
  ADD PRIMARY KEY (`comments_id`);

--
-- Indexes for table `tbl_decade`
--
ALTER TABLE `tbl_decade`
  ADD PRIMARY KEY (`decade_id`);

--
-- Indexes for table `tbl_genre`
--
ALTER TABLE `tbl_genre`
  ADD PRIMARY KEY (`genre_id`);

--
-- Indexes for table `tbl_movies`
--
ALTER TABLE `tbl_movies`
  ADD PRIMARY KEY (`movies_id`);

--
-- Indexes for table `tbl_mov_decade`
--
ALTER TABLE `tbl_mov_decade`
  ADD PRIMARY KEY (`mov_decade_id`);

--
-- Indexes for table `tbl_mov_genre`
--
ALTER TABLE `tbl_mov_genre`
  ADD PRIMARY KEY (`mov_genre_id`);

--
-- Indexes for table `tbl_shows`
--
ALTER TABLE `tbl_shows`
  ADD PRIMARY KEY (`tv_id`);

--
-- Indexes for table `tbl_shows_decade`
--
ALTER TABLE `tbl_shows_decade`
  ADD PRIMARY KEY (`shows_decade`);

--
-- Indexes for table `tbl_shows_genre`
--
ALTER TABLE `tbl_shows_genre`
  ADD PRIMARY KEY (`shows_genre_id`);

--
-- Indexes for table `tbl_songs`
--
ALTER TABLE `tbl_songs`
  ADD PRIMARY KEY (`songs_id`);

--
-- Indexes for table `tbl_urating`
--
ALTER TABLE `tbl_urating`
  ADD PRIMARY KEY (`rating_id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_arating`
--
ALTER TABLE `tbl_arating`
  MODIFY `arating_id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl_comments`
--
ALTER TABLE `tbl_comments`
  MODIFY `comments_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_decade`
--
ALTER TABLE `tbl_decade`
  MODIFY `decade_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_genre`
--
ALTER TABLE `tbl_genre`
  MODIFY `genre_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `tbl_movies`
--
ALTER TABLE `tbl_movies`
  MODIFY `movies_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `tbl_mov_decade`
--
ALTER TABLE `tbl_mov_decade`
  MODIFY `mov_decade_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `tbl_mov_genre`
--
ALTER TABLE `tbl_mov_genre`
  MODIFY `mov_genre_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `tbl_shows`
--
ALTER TABLE `tbl_shows`
  MODIFY `tv_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `tbl_shows_decade`
--
ALTER TABLE `tbl_shows_decade`
  MODIFY `shows_decade` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl_shows_genre`
--
ALTER TABLE `tbl_shows_genre`
  MODIFY `shows_genre_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl_songs`
--
ALTER TABLE `tbl_songs`
  MODIFY `songs_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl_urating`
--
ALTER TABLE `tbl_urating`
  MODIFY `rating_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `user_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
