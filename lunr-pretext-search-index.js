var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "root-1-2-2",
  "level": "1",
  "url": "root-1-2-2.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "Matthias Beck Department of Mathematics, SF State   "
},
{
  "id": "sec_intro",
  "level": "1",
  "url": "sec_intro.html",
  "type": "Section",
  "number": "1",
  "title": "Overture",
  "body": " Overture   What?  This collection of notes is meant for a mathematician with a musical background, One reason for this assumption is that our musical explanations will be kept at a minimum, the other because we find it helpful to present this material with an instrument at hand. who would like to give a session (or two) on the connection of (elementary) mathematics and music, aimed at college students (not necessarily math majors). Naturally, we hope that these notes will also be useful for the students digesting the session. We do not assume that the students have a musical background, a curiosity for both math and music will suffice.    What not?  These notes are not comprehensive in any way; for that, we recommend, e.g., . We merely present a few mathemusical topics that we find particularly amusing a few cherries picked from a very large and very tasty cake.    Who?  The author is a math professor with an active research program situated where combinatorics and number theory meet. He has played various instruments all his life and has given mathemusical class sessions and talks on (some of) the material covered here.    Quo vadis?  Like most (all?) mathematical texts on musical subjects, we stress that we have no intention to capture, much less understand, the way different aspects of music feel this is (way) beyond any arithmetic nature, not to mention the rich music theory that gets much closer to this issue. Along similar lines, we also clarify from the start that our models do not constitute any absolute measure: some features will seem arbitrary, and we feel that this is fine. The findings we offer are most definitely in the ears of the beholder, and we merely invite the reader to come up with their own interpretation of the mathematics behind the music presented here.   "
},
{
  "id": "sec_tone",
  "level": "1",
  "url": "sec_tone.html",
  "type": "Section",
  "number": "2",
  "title": "Tones, frequencies, and <span class=\"process-math\">\\(\\ZZ_{ 12 }\\)<\/span>",
  "body": " Tones, frequencies, and    A few musical concepts  We need a bit of musical language to get started. (A useful index of sorts on all kinds of musical and acoustic terms is ; it is based on .)  A single sound played on some musical instrument (or sung by a human voice) is a tone . If you know some physics\/acoustics, then you know each tone has a sound wave, which in turn has a (fundamental) frequency , measured in hertz (Hz). E.g., a concert A has 440 Hz. When musicians give a tone a name (we just named a concert A, also known as A4), we call this the pitch of the tone. A scale is an ordering of a system of pitches.  An interval consists of two tones\/pitches. If the frequencies of the two tones have the ratio 2:1, we call the interval an octave . International pitch notation uses the same letter for two pitches that are an octave apart; e.g., A3 (at 220 Hz) is an octave below A4, whereas A5 (at 880 Hz) is an octave above A4. The set of all pitches that differ by octaves is called a pitch class and can be denoted by a single letter (e.g., A). Viewed mathematically, pitch classes are wonderful examples of equivalence classes.  Frequencies behave multiplicatively; e.g., moving up an octave means doubling the frequency of the tone, moving down an octave means halving it. We can also move in between octaves: e.g., we can multiply the frequency of a given tone by to reach another tone This creates an interval of what musicians call a perfect fifth ; to reach the octave above the original tone, we can multiply the frequency again by . The second thus created interval is a perfect forth .   It is a short step to model, say, a twelve-note scale as (see Figure ), and so these mathematical aspects of chords are independent of the actual frequency ratios of the scale.   My favorite depiction of .      The harmonic spectrum  A tone actually comes with many frequencies: its fundamental frequency (which determines the pitch of the tone) and its harmonic spectrum , consisting of positive integer multiple of the fundamental frequency. E.g., the first and second harmonic of a given tone will form an octave. The relative intensity of these harmonics are, for the most part, responsible for the tone quality\/timbre; i.e., different instruments will feature different harmonic spectra. Instruments also feature resonating frequencies that are not integer multiples of the fundamental; these are called partials . They play a large role, e.g., in bells and percussion instruments.    "
},
{
  "id": "sec_tone-2-3",
  "level": "2",
  "url": "sec_tone.html#sec_tone-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tone (fundamental) frequency pitch scale "
},
{
  "id": "sec_tone-2-4",
  "level": "2",
  "url": "sec_tone.html#sec_tone-2-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "interval octave pitch class "
},
{
  "id": "fig_pianokeys",
  "level": "2",
  "url": "sec_tone.html#fig_pianokeys",
  "type": "Figure",
  "number": "2.1",
  "title": "",
  "body": " My favorite depiction of .   "
},
{
  "id": "sec_tone-3-2",
  "level": "2",
  "url": "sec_tone.html#sec_tone-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "harmonic spectrum partials "
},
{
  "id": "sec_scales",
  "level": "1",
  "url": "sec_scales.html",
  "type": "Section",
  "number": "3",
  "title": "Scales",
  "body": " Scales  The mathematics of musical scales and, by extension, intervals between two notes has been extensively studied (see, e.g., for two recent papers). A key feature of an interval is the frequency ratio between the two notes. Vastly simplified (and one has to be careful, for various reasons), our ears seem to prefer simple ratios, such as (octave), (perfect fifth), (perfect forth), etc. Next we address the (decision) problem of assigning interval fractions. To illustrate the subtleties involved, it is helpful to have a sample scale to follow along with; we use one of the most common just scales given in Table , due to Johannes Kepler and known as Kepler's Monochord No. 2 , transposed down a fifth ; In its most restrictive definition, a \\Def{just scale} is one with frequency ratios only involving the primes 2, 3, and 5. Kepler's just scale is based on a ratio for each major chord (C-E-G, F-A-C, and G-B-D); this is precisely the ratio in which the major chord appears within the harmonic spectrum of a tone. Minor third and minor seventh follow then by symmetry, and the ratio for F\\sh is the product of the ratios for a major third and a whole tone. the following section will discuss analogous results for various other scales (see also \\url{https:\/\/brefeld.hier-im-netz.de\/konsonanz.html}).   The frequency ratios of Kepler's just scale    C  C\\sh  D  E\\fl  E  F  F\\sh  G  G\\sh  A  B\\fl  B                               \\vspace{10pt}  The inversion equivalence (b) dictates that the interval fraction of a given interval in a chord and that of its complementary interval are equal. For example, the first F-major chord in Figure features a perfect forth between C and F, where the next inversion gives a perfect fifth between these two notes (once more, because we do not distinguish between octaves). Thus the respective interval fractions, i.e., and , must be equal. Based on Table , the two possible choices for are and ; we give preference to the frequency ratio whose sum of numerator and denominator is smaller. Thus in this case, . More generally, we must have . (This mirrors the fact that in there are only six meaningful nonzero distances.) Our choice of preference results in the interval fractions in Table .   The interval fractions stemming from Kepler's just scale                                          \\vspace{10pt}  We are now all set to compute the weight of a given triad; again, it equals the sum of all numerators and denominators appearing in each interval fraction that we can detect in the triad. Birkhoff conceptualized a notion of aesthetic measure of a chord, though it is arguable much less refined. For example, the major triad C-E-G features a perfect fifth, a major third, and a minor third; thus its weight equals , summing the numerators and denominators appearing in , , and . Naturally, this number depends only on the distances between the base note and the other two notes, in this case 4 and 7; we will record this triad as the pair . Table shows the weights for all twelve equivalence classes: the first row gives the differences to the base note for one representative of the equivalence class, the second row sums the numerators and denominators appearing in , , and .   The chord weights stemming from Kepler's just scale                                63  48  40  37  105  43  30  103  27  93  22  27   \\vspace{10pt}  The weight gives a (very rough) measure of a chord. Indeed, the lightest chord family contains major and minor triads. The next three chord families, with weights 27 and 30, are (corresponding to a set of lovely chords), (corresponding to the tritone), and (another lovely chord family). The respective chords are illustrated in Figure .   The chords in the equivalence classes , , , and .     Why 12?  Partial fractions turn out to be useful also when constructing a scale from first principles. Let's say we want to come up with a scale with tones per octave, and we'd like to have a good approximation of the frequency ratio for the perfect fifth. If you think about the construction above, this translates to finding a \"good\" fraction in the sense that is reasonably close to in other words, we want to have a good rational approximation of . The continued fraction of this number equals , which gives as first approximations This suggests that there are scales with 2, 3 , 5, 7, 12, 41, 53, etc. tones in an octave that contain a reasonably good perfect fifth.  Scales with 2 or 3 tones are not that exciting, but any musician will know a pentatonic and a heptatonic scale: you can hear examples by playing only the black, resp. white,` keys on a piano. These scales are not anywhere close to equally tuned, but those exist also: there is an ancient 5-tone scale tuning system called slendro used in gamelan instruments and a 7-tone scale tuning used in traditional Siamese music . The next numerator in is 12, and it is one indication why the 12-tone scale that is prevalent today is mathematically natural.  You might ask, what about 41- or 53-tone scales? They exist: e.g., there is the xenharmonic garibaldi temperament (using 41 tones) and a generalized keyboard hamonium with 53 notes to an octave constructed in 1876 by Robert Boranquet .   "
},
{
  "id": "tab_classicjustscale",
  "level": "2",
  "url": "sec_scales.html#tab_classicjustscale",
  "type": "Table",
  "number": "3.1",
  "title": "The frequency ratios of Kepler’s just scale",
  "body": " The frequency ratios of Kepler's just scale    C  C\\sh  D  E\\fl  E  F  F\\sh  G  G\\sh  A  B\\fl  B                               \\vspace{10pt} "
},
{
  "id": "tab_classicjustscaleintfractions",
  "level": "2",
  "url": "sec_scales.html#tab_classicjustscaleintfractions",
  "type": "Table",
  "number": "3.2",
  "title": "The interval fractions stemming from Kepler’s just scale",
  "body": " The interval fractions stemming from Kepler's just scale                                          \\vspace{10pt} "
},
{
  "id": "table_classicjustscaleprimecomplexity",
  "level": "2",
  "url": "sec_scales.html#table_classicjustscaleprimecomplexity",
  "type": "Table",
  "number": "3.3",
  "title": "The chord weights stemming from Kepler’s just scale",
  "body": " The chord weights stemming from Kepler's just scale                                63  48  40  37  105  43  30  103  27  93  22  27   \\vspace{10pt} "
},
{
  "id": "fig_classicwinners",
  "level": "2",
  "url": "sec_scales.html#fig_classicwinners",
  "type": "Figure",
  "number": "3.4",
  "title": "",
  "body": " The chords in the equivalence classes , , , and .   "
},
{
  "id": "sec_chords",
  "level": "1",
  "url": "sec_chords.html",
  "type": "Section",
  "number": "4",
  "title": "Chords",
  "body": " Chords  Similar to scales, there is much literature on the mathematics of musical chords giving, e.g., interesting group-theoretic connections, both in music theory (see, e.g., ) and algebra (see, e.g., ). These tend to concern movements in a given musical piece, such as transpositions and inversions.  But why do we perceive, say, a major triad as more pleasant than a chord consisting of three notes separated by two half tones? One could make an argument that the appreciation of chords is to a large extend culturally based. On the other hand, acoustics (see, e.g., ) offers some explanations, e.g., by looking at the wave forms of chords containing a perfect forth. (Many piano tuners start with forths for the same reason, though they listen for beats in order to achieve an equal-tempered scale.) This gives rise to much interesting mathematics (see, e.g., ) and statistics (see, e.g., ). However, the mathemusical literature seems to contain few studies on musical chords in analogy with the afore-mentioned simple-fractions intervals. Our aim is to develop a mathematical model that might fill some of these gaps.  Capturing a numerical value of a given chord relies on fixing a scale, and different scales will yield different numerics. We will develop a model and then try it out on different scales; all of them will be just scales , i.e., ones with simple Here simple refers to fractions whose numerator and denominator are not too large. We will have more to say about this later. rational frequency ratio (as opposed to, e.g., the equal-tempered 12-note scale, in which each interval has a frequency ratio equal to a power of ; see for a mathematical interplay between just and equal-temperament scales). It is this feature that will allow us to study chords from an basic mathematical perspective.  For the sake of simplicity, we discuss triads (chords with three distinct notes) on a 12-notes scale; our model can be adapted to any set of chords with the same number of notes on a scale with any number of notes.  The underlying space of triads is with the planes , , and taken out; thus we encode the twelve half tones by the elements in , say starting with C as 0, C as 1, D as 2, etc., ending with B as 11. Computing modulo 12 means we do not distinguish between a given note and its octave. We develop further equivalencies, such as the following (we think) reasonable assumptions:   (a) chords that are translates of each other (e.g., E-minor and F -minor) are equivalent;   (b) chords that are inversions of each other (e.g., in Figure ) are equivalent. Considering only equivalence (b) means the space of triads becomes , a discrete version of an orbifold .      F-major inversions.    Our model will assign each triad a numerical value which we call its weight , and any two equivalent chords will have the same weight. It is based on a given scale, from which we assign a value (which we will call interval fraction ) to each interval; the weight of a given triad equals the sum of all numerators and denominators of all interval fractions appearing in the triad. Let's denote the respective interval fractions by (for a semitone), (whole tone), (minor third), , (major seven). When computing the weight of a chord, another natural assumption is that   (c) chords with the same set of interval fractions (e.g., G-minor and G-major, each of which contain one major and one minor third) are equivalent. At this point we would be remiss not pointing out the infamous question in harmony theory why major and minor chords are different in character from one another to our ears; our equivalence (c) demands that our model does not prefer one over the other.     It is an amusing combinatorial problem to count the resulting equivalence classes. By the translation equivalence (a), we may consider only triads that contain the note C. There are seven equivalence classes consisting of triads with distinct distances (and so they contain six chords each), four equivalence classes consisting of triads with two distinct distances (containing three chords each), and one class consisting of a single triad in which the three notes have equal distance; Figure shows one equivalence class each (for ease of computing intervals, we repeated the C).   Three sample equivalence classes.    "
},
{
  "id": "fig_inversions",
  "level": "2",
  "url": "sec_chords.html#fig_inversions",
  "type": "Figure",
  "number": "4.1",
  "title": "",
  "body": " F-major inversions.   "
},
{
  "id": "fig_equclasses",
  "level": "2",
  "url": "sec_chords.html#fig_equclasses",
  "type": "Figure",
  "number": "4.2",
  "title": "",
  "body": " Three sample equivalence classes.   "
},
{
  "id": "root-1-2-7-1",
  "level": "1",
  "url": "root-1-2-7-1.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " We thank the PreTeXt support group, in particular David Austin and David Farmer, for sharing their wisdom.  "
},
{
  "id": "root-1-2-7-2",
  "level": "1",
  "url": "root-1-2-7-2.html",
  "type": "References",
  "number": "",
  "title": "Bibliography",
  "body": " Bibliography  J. Murray Barbour, Tuning and Temperament: A Historical Survey, Michigan State College Press, East Lansing, 1951.  Dave Benson, Music: A Mathematical Offering, Cambridge University Press, 2007.   George D. Birkhoff, Aesthetic Measure, Harvard University Press, 1933.  Jeffrey R. Boland and Lane P. Hughston, Mathematical foundations of complex tonality, J. Math. Music 18 (2024), no. 2, 173-202.  Emily Clader, Why twelve tones? The mathematics of musical tuning, Math. Intell. 40 (2018), no. 3, 32-36.  Alissa S. Crans, Thomas M. Fiore, and Ramon Satyendra, Musical actions of dihedral groups, Amer. Math. Monthly 116 (2009), no. 6, 479-495.  Rafael Cubarsi, Harmonic distance in intervals and chords, J. Math. Music 13 (2019), no. 1, 85-106.  Tuomas Eerola and Imre Lahdelma, The anatomy of consonance\/dissonance: Evaluating acoustic and cultural predictors across multiple datasets with chords, Music & Science 4 (2021), 1-19.  Donald E. Hall, Musical Acoustics, Brooks\/Cole Publishing Company, 1991.  Hermann Helmholtz, On the Sensations of Tone, Dover Publications, 1954.  Isabella Masina and Giuseppe Lo Presti, Triad's consonance and dissonance: combining roughness and compactness models, Eur. Phys. J. Plus (2024), 139:79.  Robert Morris, Mathematics and the twelve-tone system: past, present, and future, Mathematics and computation in music. First international conference, MCM 2007, Berlin, Germany, May 18-20, 2007. Revised Selected Papers, Berlin: Springer, 2009, pp. 266-288.  Jordan Schettler, Wendy Carlos's xenharmonic keyboard, Math. Mag. 92 (2019), no. 3, 201-212.  Barry Truax (editor), Handbook for Acoustic Ecology, 2nd edition, Cambridge Street Publishing, 1999.  Dmitri Tymoczko, The geometry of musical chords, Science 313 (2006), no. 5783, 72-74.  James S. Walker and Gary W. Don, Mathematics and Music. Composition, Perception, and Performance, 2nd edition ed., Boca Raton, FL: CRC Press, 2020.  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
