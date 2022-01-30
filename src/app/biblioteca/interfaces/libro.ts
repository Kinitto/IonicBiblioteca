import { Type } from '@angular/core';

export interface Libro {
  key?:                              string;
  type?:                             Type<1>;
  seed?:                             string[];
  title?:                            string;
  titleSuggest?:                     string;
  hasFulltext?:                      boolean;
  editionCount?:                     number;
  editionKey?:                       string[];
  publishDate?:                      string[];
  publishYear?:                      number[];
  firstPublishYear?:                 number;
  numberOfPagesMedian?:              number;
  lccn?:                             string[];
  publishPlace?:                     string[];
  oclc?:                             string[];
  contributor?:                      string[];
  lcc?:                              string[];
  ddc?:                              string[];
  isbn?:                             string[];
  lastModifiedI?:                    number;
  ebookCountI?:                      number;
  ia?:                               string[];
  publicScanB?:                      boolean;
  iaCollectionS?:                    string;
  lendingEditionS?:                  string;
  lendingIdentifierS?:               string;
  printdisabledS?:                   string;
  coverEditionKey?:                  string;
  coverI?:                           number;
  firstSentence?:                    string[];
  publisher?:                        string[];
  language?:                         string[];
  authorKey?:                        string[];
  authorName?:                       string[];
  authorAlternativeName?:            string[];
  person?:                           string[];
  place?:                            string[];
  subject?:                          string[];
  idAlibrisID?:                      string[];
  idAmazon?:                         string[];
  idBodleianOxfordUniversity?:       string[];
  idDepósitoLegal?:                  string[];
  idGoodreads?:                      string[];
  idGoogle?:                         string[];
  idHathiTrust?:                     string[];
  idLibrarything?:                   string[];
  idPaperbackSwap?:                  string[];
  idWikidata?:                       string[];
  iaLoadedID?:                       string[];
  iaBoxID?:                          string[];
  publisherFacet?:                   string[];
  personKey?:                        string[];
  placeKey?:                         string[];
  personFacet?:                      string[];
  subjectFacet?:                     string[];
  version?:                          number;
  placeFacet?:                       string[];
  lccSort?:                          string;
  authorFacet?:                      string[];
  subjectKey?:                       string[];
  ddcSort?:                          string;
  idAmazonCAAsin?:                   string[];
  idAmazonCoUkAsin?:                 string[];
  idAmazonDeAsin?:                   string[];
  idAmazonItAsin?:                   string[];
  idCanadianNationalLibraryArchive?: string[];
  idOverdrive?:                      string[];
  idBritishLibrary?:                 string[];
  idAbebooksDe?:                     string[];
  idBritishNationalBibliography?:    string[];
  subtitle?:                         string;
  time?:                             string[];
  timeFacet?:                        string[];
  timeKey?:                          string[];
}