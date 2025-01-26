var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "root-1-2-2",
  "level": "1",
  "url": "root-1-2-2.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  Matthias Beck Department of Mathematics, SF State     copyright      "
},
{
  "id": "sec_intro",
  "level": "1",
  "url": "sec_intro.html",
  "type": "Section",
  "number": "1",
  "title": "Overture",
  "body": " Overture   All musicians are subconsciously mathematicians.   Thelonious Monk   What?  This collection of notes is meant for a mathematician with a musical background, One reason for this assumption is that our musical explanations will be kept at a minimum, the other because we find it helpful to present this material with an instrument at hand. who would like to give a session (or two) on the connection of (elementary) mathematics and music, aimed at college students (not necessarily math majors). Naturally, we hope that these notes will also be useful for the students digesting the session. We do not assume that the students have a musical background, a curiosity for both math and music will suffice.    What not?  These notes are not comprehensive in any way; for that, we recommend, e.g., . We merely present a few mathemusical topics that we find particularly amusing a few cherries picked from a very large and very tasty cake.    Who?  The author is a math professor with an active research program in the intersection of combinatorics and number theory. He has played various instruments all his life and has given mathemusical class sessions and talks on (some of) the material covered here.    Quo vadis?  Like most (all?) mathematical texts on musical subjects, we stress that we have no intention to capture, much less understand, the way different aspects of music feel this is (way) beyond any arithmetic nature, not to mention the rich music theory that gets much closer to this issue. Along similar lines, we also clarify from the start that our models do not constitute any absolute measure: some features will seem arbitrary, and we feel that this is fine. The (musical) explanations we offer are most definitely in the ears of the beholder, and we merely invite the reader to come up with their own interpretation of the mathematics behind the music presented here.   "
},
{
  "id": "sec_tone",
  "level": "1",
  "url": "sec_tone.html",
  "type": "Section",
  "number": "2",
  "title": "Tones, frequencies, and <span class=\"process-math\">\\(\\ZZ_{ 12 }\\)<\/span>",
  "body": " Tones, frequencies, and   We need a bit of musical language to get started. (A useful index of sorts on all kinds of musical and acoustic terms is ; it is based on . For general music theory, see, e.g., .)   A few musical concepts  A single sound played on some musical instrument (or sung by a human voice) is a tone . If you know some physics\/acoustics, then you know each tone has a sound wave, which in turn has a (fundamental) frequency , measured in hertz (Hz). E.g., a concert A has 440 Hz. When musicians give a tone a name (we just named a concert A, also known as A4), we call this the pitch of the tone. A scale is an ordering of a system of pitches.  An interval consists of two tones\/pitches. If the frequencies of the two tones have the ratio , we call the interval an octave . International pitch notation uses the same letter for two pitches that are an octave apart; e.g., A3 (at 220 Hz) is an octave below A4, whereas A5 (at 880 Hz) is an octave above A4. The set of all pitches that differ by octaves is called a pitch class In music psychology, tones in the same pitch class are said to have the same chroma . and can be denoted by a single letter (e.g., A). Viewed mathematically, pitch classes are wonderful examples of equivalence classes.  Frequencies behave multiplicatively; e.g., moving up an octave means doubling the frequency of the tone, moving down an octave means halving it. We can also move in between octaves: e.g., we can multiply the frequency of a given tone by to reach another tone; to reach the octave above the original tone, we can multiply the frequency again by .  In , we will discuss how one constructs actual musical scales; for now we want to pre-process this with a (simple) abstract mathematical model. We will make the crucial assumption that a scale has a periodic character governed by octaves, in the sense that, if we know the frequencies of the tones within a given octave, the corresponding tones in the following octave will have exactly double those frequencies. Thus, if a scale features tones within one octave, we can compute the frequency of any tone in the scale if we know the frequencies of these tones.   My favorite depiction of .    As an example, the black keys on a piano (see Figure ) form an instance of what's known as a pentatonic scale . Start at your favorite F , and five black keys later you will end up at another F , one octave higher. (If you'd like to try a simple online version of a piano, . So here and the frequencies of any consecutive F , G , A , C , and D determine the frequency of the whole scale. Similarly, the white keys form an example of a heptatonic scale , with . As a final example, all keys of the piano form the chromatic scale , with . A musician will note a crucial difference between the first two scales and the chromatic one: the latter consists entirely of semitone steps, whereas the two former scales have steps consisting of some semitones, some whole tones, and some minor thirds.  It is a short step to model a scale with notes in an octave with as a labeling of a base scale (such as F , G , A , C , and D in our pentatonic example), the assigned frequencies of which will determine those of the entire scale.    Interval arithmetic  From now on, we will work with a chromatic scale, with 12 tones in an octave. We model it as , with C as the base note; this is an arbitrary starting point, and so in a mathematical sense, we may ignore the second row in Table and simply think of tones (rather, their pitch classes) as elements in ; we will keep featuring this row in tables below for musically inclined readers.   The scale.    0  1  2  3  4  5  6  7  8  9  10  11    C  C  D  E  E  F  F  G  G  A  B  B     In this model, intervals correspond to differences, and if we care only about pitch classes, we compute these differences in . Table gives the musical terms.   Intervals.    0  (perfect) unison    1  semitone    2  whole tone    3  minor third    4  major third    5  (perfect) forth    6  tritone    7  (perfect) fifth    8  minor sixth    9  major sixth    10  minor seventh    11  major seventh    12  octave     We can now see the aforementioned multiplicative behavior of frequencies mirrored in the additive structure of the integers or, if we care only about pitch classes, that of . For example, a fifth plus a forth yields an octave (since ), and so the respective frequency ratios (in a natural tuning, these would be and ) multiply to .  As another example, arguing a bit more within , we can wee that and are additive inverses; musically this means, e.g., that moving down a forth is in the same pitch class as moving up a fifth; indeed the two resulting notes are an octave apart.    The harmonic spectrum  A tone actually comes with many frequencies: its fundamental frequency (which determines the pitch of the tone) and its harmonic spectrum , consisting of positive integer multiple of the fundamental frequency. E.g., the first and second harmonic of a given tone will form an octave. The relative intensity of these harmonics are, for the most part, responsible for the tone quality\/timbre; i.e., different instruments will feature different harmonic spectra. Instruments also feature resonating frequencies that are not integer multiples of the fundamental; these are called partials . They play a large role, e.g., in bells and percussion instruments.   The third and second harmonics have thus a frequency ratio of , the forth and third harmonics one of , and so on. Musically, the interval between the third and second harmonics is a fifth, and we will use its frequency ratio of as a starting point for building musical scales.    A first number-theoretic problem  As an additive group, is generated by , , , or . So, e.g., repeatedly adding runs through all numbers in and will eventually give 0 (after the twelfth addition). Musically, this means that repeatedly going up in fifth will cycle through each pitch class (this is known as the circle of fifths , see Figure ) and will end up in the starting pitch class after twelve steps.   The circle of fifths.    Mathematically, this should translate into being a power of (corresponding to a few octaves), more precisely, . The uniqueness of prime factorization tells us that this cannot happen, though it's close:   Thus our starting point of building scales from fifths features two conflicting philosophies: acoustics (more precisely, the harmonic spectrum) tells us that the natural frequency ratio of the fifth is , and mathematics (more precisely, prime factorization) tells us that we will never reach an octave using this frequency ratio. So something has to give, and as it turns out, there is a whole bouquet of somethings , each yielding a different scale.   "
},
{
  "id": "sec_tone-3-2",
  "level": "2",
  "url": "sec_tone.html#sec_tone-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tone (fundamental) frequency pitch scale "
},
{
  "id": "sec_tone-3-3",
  "level": "2",
  "url": "sec_tone.html#sec_tone-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "interval octave pitch class chroma "
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
  "id": "tab_z12scale",
  "level": "2",
  "url": "sec_tone.html#tab_z12scale",
  "type": "Table",
  "number": "2.2",
  "title": "The <span class=\"process-math\">\\(\\ZZ_{ 12 }\\)<\/span> scale.",
  "body": " The scale.    0  1  2  3  4  5  6  7  8  9  10  11    C  C  D  E  E  F  F  G  G  A  B  B    "
},
{
  "id": "tab_intervals",
  "level": "2",
  "url": "sec_tone.html#tab_intervals",
  "type": "Table",
  "number": "2.3",
  "title": "Intervals.",
  "body": " Intervals.    0  (perfect) unison    1  semitone    2  whole tone    3  minor third    4  major third    5  (perfect) forth    6  tritone    7  (perfect) fifth    8  minor sixth    9  major sixth    10  minor seventh    11  major seventh    12  octave    "
},
{
  "id": "subsec_harmonicspectrum-2",
  "level": "2",
  "url": "sec_tone.html#subsec_harmonicspectrum-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "harmonic spectrum partials "
},
{
  "id": "fig_circle_of_fifths",
  "level": "2",
  "url": "sec_tone.html#fig_circle_of_fifths",
  "type": "Figure",
  "number": "2.4",
  "title": "",
  "body": " The circle of fifths.   "
},
{
  "id": "sec_scales",
  "level": "1",
  "url": "sec_scales.html",
  "type": "Section",
  "number": "3",
  "title": "Scales",
  "body": " Scales  The mathematics of musical scales and, by extension, intervals between two notes has been extensively studied (see, e.g., for two recent papers). Here we present various constructions; all are for a scale in 12 notes in an octave (with frequency ratio ) and the existence of a (perfect) fifth with frequency ratio . In our simple mathematical model, the fifth corresponds to the number in .   The Pythagorean scale  Our first construction takes the fact that , corresponding to the fifth, generates quite literally. Again, we assign the frequency . Since , the frequency assigned to (the whole tone) needs to be scaled down by an octave, that is, . Moving up by another perfect fifth, we reach (the major sixth), with frequency . The next step again needs its frequency scaled down by an octave, i.e., , the frequency for the major third. Stepping up one more fifth reaches (the major seventh), with frequency . One more step yields (the tritone), with frequency .  Next we make use of the fact that (the forth), which thus gets assigned the frequency (because ). From here we now move down a fifth to (the minor seventh), whose frequency needs to be moved up an octave: . The next fifth down reaches (the minor third), with frequency . One more step yields (the minor sixth), with frequency . Finally, gives the semitone with frequency . The resulting scale is summarized in Table .   The frequency ratios of the Pythagorean scale.    0  1  2  3  4  5  6  7  8  9  10  11    C  C  D  E  E  F  F  G  G  A  B  B                   At this point, we can see the number theory problem of the circle of fifths from Section in action: the next step going down a fifth reaches , the tritone, which we already reached by moving up by six fifths. However, going down would assign the frequency , which differs from ever so slightly:     Just scales  It is not hard to notice that the frequency ratios in Table contain only powers of and ; this stems from the very construction of the Pythagorean scale, which in turn necessitates that the numerators and denominators appearing in the frequency ratios become large rather quickly. Our next scale construction avoids this, essentially by also allowing a in the prime factorizations of the frequency values. This feature of building up frequency ratios using the primes , , and yields the most restrictive definition of a just scale ; a more loose definition of this term applies to any scale whose frequency ratios feature small numerators and denominators.  In Section , we motivated the frequency ratio of the fifth (corresponding to the number in ), stemming from the 2nd and 3rd harmonics, as a starting point for building musical scales. The pair of 3rd and 4th harmonics gives the frequency ratio of a forth (corresponding to in ), which complements the fifth to an octave and thus gives no new constraints. However, the next pair of harmonics, yielding the \"natural\" frequency ratio of a major third (corresponding to in ), gives rise to a second starting point of constructing a scale.  At this point in our construction, the frequency ratios for , , , and are fixed. The next natural steps are to set the frequency ratio of to and that of to . one of the most common just scales given in Table , due to Johannes Kepler and known as Kepler's Monochord No. 2 , transposed down a fifth ; Kepler's just scale is based on a ratio for each major chord (C-E-G, F-A-C, and G-B-D); this is precisely the ratio in which the major chord appears within the harmonic spectrum of a tone. Minor third and minor seventh follow then by symmetry, and the ratio for F\\sh is the product of the ratios for a major third and a whole tone.   The frequency ratios of Kepler's just scale    0  1  2  3  4  5  6  7  8  9  10  11    C  C  D  E  E  F  F  G  G  A  B  B                     Equal-tempered scales and continued fractions    Why 12?  Continued fractions turn out to be useful also when constructing a scale from first principles. Let's say we want to come up with a scale with tones per octave, and we'd like to have a good approximation of the frequency ratio for the perfect fifth. If you think about the construction above, this translates to finding a \"good\" fraction in the sense that is reasonably close to in other words, we want to have a good rational approximation of . The continued fraction of this number is as follows:   This yields as first approximations suggesting that there are scales with 2, 3 , 5, 7, 12, 41, 53, etc. tones in an octave that contain a reasonably good perfect fifth.  Scales with 2 or 3 tones are not that exciting, but any musician will know a pentatonic and a heptatonic scale: as we said earlier, you can hear examples by playing only the black, resp. white,` keys on a piano. These scales are not anywhere close to equally tuned, but those exist also: there is an ancient 5-tone scale tuning system called slendro used in gamelan instruments and a 7-tone scale tuning used in traditional Siamese music . The next numerator in is 12, and it is one indication why the 12-tone scale that is prevalent today is mathematically natural.  You might ask, what about 41- or 53-tone scales? They exist: e.g., there is the xenharmonic garibaldi temperament (using 41 tones) and a generalized keyboard hamonium with 53 notes to an octave constructed in 1876 by Robert Boranquet .   "
},
{
  "id": "tab_pythagoraenscale",
  "level": "2",
  "url": "sec_scales.html#tab_pythagoraenscale",
  "type": "Table",
  "number": "3.1",
  "title": "The frequency ratios of the Pythagorean scale.",
  "body": " The frequency ratios of the Pythagorean scale.    0  1  2  3  4  5  6  7  8  9  10  11    C  C  D  E  E  F  F  G  G  A  B  B                  "
},
{
  "id": "sec_scales-4-2",
  "level": "2",
  "url": "sec_scales.html#sec_scales-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "just scale "
},
{
  "id": "tab_classicjustscale",
  "level": "2",
  "url": "sec_scales.html#tab_classicjustscale",
  "type": "Table",
  "number": "3.2",
  "title": "The frequency ratios of Kepler’s just scale",
  "body": " The frequency ratios of Kepler's just scale    0  1  2  3  4  5  6  7  8  9  10  11    C  C  D  E  E  F  F  G  G  A  B  B                  "
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
  "body": " We thank the PreTeXt support group, in particular David Austin and David Farmer, for sharing their wisdom. Musical scores were created with the  sheet music text editor.  "
},
{
  "id": "root-1-2-7-2",
  "level": "1",
  "url": "root-1-2-7-2.html",
  "type": "References",
  "number": "",
  "title": "Bibliography",
  "body": " Bibliography  J. Murray Barbour, Tuning and Temperament: A Historical Survey, Michigan State College Press, East Lansing, 1951.  Dave Benson, Music: A Mathematical Offering, Cambridge University Press, 2007.   George D. Birkhoff, Aesthetic Measure, Harvard University Press, 1933.  Jeffrey R. Boland and Lane P. Hughston, Mathematical foundations of complex tonality, J. Math. Music 18 (2024), no. 2, 173-202.  Emily Clader, Why twelve tones? The mathematics of musical tuning, Math. Intell. 40 (2018), no. 3, 32-36.  Alissa S. Crans, Thomas M. Fiore, and Ramon Satyendra, Musical actions of dihedral groups, Amer. Math. Monthly 116 (2009), no. 6, 479-495.  Rafael Cubarsi, Harmonic distance in intervals and chords, J. Math. Music 13 (2019), no. 1, 85-106.  Tuomas Eerola and Imre Lahdelma, The anatomy of consonance\/dissonance: Evaluating acoustic and cultural predictors across multiple datasets with chords, Music & Science 4 (2021), 1-19.  Donald E. Hall, Musical Acoustics, Brooks\/Cole Publishing Company, 1991.  Hermann Helmholtz, On the Sensations of Tone, Dover Publications, 1954.  Robert Hutchinson, Music Theory for the 21st-Century Classroom, , 2023.  Isabella Masina and Giuseppe Lo Presti, Triad's consonance and dissonance: combining roughness and compactness models, Eur. Phys. J. Plus (2024), 139:79.  Robert Morris, Mathematics and the twelve-tone system: past, present, and future, Mathematics and computation in music. First international conference, MCM 2007, Berlin, Germany, May 18-20, 2007. Revised Selected Papers, Berlin: Springer, 2009, pp. 266-288.  Jordan Schettler, Wendy Carlos's xenharmonic keyboard, Math. Mag. 92 (2019), no. 3, 201-212.  Barry Truax (editor), Handbook for Acoustic Ecology, 2nd edition, Cambridge Street Publishing, 1999.  Dmitri Tymoczko, The geometry of musical chords, Science 313 (2006), no. 5783, 72-74.  James S. Walker and Gary W. Don, Mathematics and Music. Composition, Perception, and Performance, 2nd edition ed., Boca Raton, FL: CRC Press, 2020.  "
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
