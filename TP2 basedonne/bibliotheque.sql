-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Serveur: 127.0.0.1
-- Généré le : Ven 01 Décembre 2023 à 14:16
-- Version du serveur: 5.5.10
-- Version de PHP: 5.3.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `bibliotheque`
--

-- --------------------------------------------------------

--
-- Structure de la table `adherent`
--

CREATE TABLE IF NOT EXISTS `adherent` (
  `CodeAdh` varchar(50) NOT NULL,
  `NomAdh` varchar(50) NOT NULL,
  `PrenomAdh` varchar(50) NOT NULL,
  `AdresseAdh` varchar(50) NOT NULL,
  PRIMARY KEY (`CodeAdh`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `adherent`
--


-- --------------------------------------------------------

--
-- Structure de la table `auteur`
--

CREATE TABLE IF NOT EXISTS `auteur` (
  `CodeAut` varchar(50) NOT NULL,
  `NomAut` varchar(50) NOT NULL,
  `PrenomAut` varchar(50) NOT NULL,
  PRIMARY KEY (`CodeAut`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `auteur`
--


-- --------------------------------------------------------

--
-- Structure de la table `auteur_de`
--

CREATE TABLE IF NOT EXISTS `auteur_de` (
  `CodeOuvrage` varchar(50) NOT NULL,
  `CodeAut` varchar(50) NOT NULL,
  PRIMARY KEY (`CodeOuvrage`,`CodeAut`),
  KEY `Auteur_de_Auteur0_FK` (`CodeAut`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `auteur_de`
--


-- --------------------------------------------------------

--
-- Structure de la table `indexe`
--

CREATE TABLE IF NOT EXISTS `indexe` (
  `CodeOuvrage` varchar(50) NOT NULL,
  `CodeMot` varchar(50) NOT NULL,
  PRIMARY KEY (`CodeOuvrage`,`CodeMot`),
  KEY `Indexe_Mots0_FK` (`CodeMot`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `indexe`
--


-- --------------------------------------------------------

--
-- Structure de la table `mots`
--

CREATE TABLE IF NOT EXISTS `mots` (
  `CodeMot` varchar(50) NOT NULL,
  `Mot` varchar(50) NOT NULL,
  PRIMARY KEY (`CodeMot`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `mots`
--


-- --------------------------------------------------------

--
-- Structure de la table `ouvrage`
--

CREATE TABLE IF NOT EXISTS `ouvrage` (
  `CodeOuvrage` varchar(50) NOT NULL,
  `TitreOuvrage` varchar(50) NOT NULL,
  `DateEmprunt` date NOT NULL,
  `CodeAdh` varchar(50) NOT NULL,
  `CodeRayon` varchar(50) NOT NULL,
  PRIMARY KEY (`CodeOuvrage`),
  KEY `Ouvrage_Adherent_FK` (`CodeAdh`),
  KEY `Ouvrage_Rayons0_FK` (`CodeRayon`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `ouvrage`
--


-- --------------------------------------------------------

--
-- Structure de la table `rayons`
--

CREATE TABLE IF NOT EXISTS `rayons` (
  `CodeRayon` varchar(50) NOT NULL,
  `IntilueRayon` varchar(50) NOT NULL,
  PRIMARY KEY (`CodeRayon`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `rayons`
--


--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `auteur_de`
--
ALTER TABLE `auteur_de`
  ADD CONSTRAINT `Auteur_de_Ouvrage_FK` FOREIGN KEY (`CodeOuvrage`) REFERENCES `ouvrage` (`CodeOuvrage`),
  ADD CONSTRAINT `Auteur_de_Auteur0_FK` FOREIGN KEY (`CodeAut`) REFERENCES `auteur` (`CodeAut`);

--
-- Contraintes pour la table `indexe`
--
ALTER TABLE `indexe`
  ADD CONSTRAINT `Indexe_Ouvrage_FK` FOREIGN KEY (`CodeOuvrage`) REFERENCES `ouvrage` (`CodeOuvrage`),
  ADD CONSTRAINT `Indexe_Mots0_FK` FOREIGN KEY (`CodeMot`) REFERENCES `mots` (`CodeMot`);

--
-- Contraintes pour la table `ouvrage`
--
ALTER TABLE `ouvrage`
  ADD CONSTRAINT `Ouvrage_Adherent_FK` FOREIGN KEY (`CodeAdh`) REFERENCES `adherent` (`CodeAdh`),
  ADD CONSTRAINT `Ouvrage_Rayons0_FK` FOREIGN KEY (`CodeRayon`) REFERENCES `rayons` (`CodeRayon`);
