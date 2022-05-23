"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-audio/ngx */ 6386);




//import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
//import { Media } from '@ionic-native/media/ngx';

let HomePage = class HomePage {
    constructor(nativeAudio) {
        this.nativeAudio = nativeAudio;
        this.motsArray = [
            { word: 'papillon',
                question: 'Le papillon έχει άστατο χαρακτήρα και ζει στη φύση',
                reponse: 'πεταλούδα' },
            { word: 'détendue',
                question: 'στο κολυμβητήριο η ατμόσφαιρα είναι détendue',
                reponse: 'χαλαρωτικός' },
            { word: 'lieus',
                question: 'το σπίτι, το πάρκο, η καφετέρια είναι lieus',
                reponse: 'μέρη' },
            { word: 'debordent',
                question: 'οι θάλασσες όταν έχει φουσκοθαλασσιά debordent (ρήμα γ’ πληθυντικό)',
                reponse: 'ξεχειλίζουν' },
            { word: 'emotions',
                question: 'η λύπη και η χαρά είναι emotions εμοσιόν',
                reponse: 'συναισθήματα' },
            { word: 'frustration',
                question: 'όταν τα πράγματα είναι χειρότερα από ό,τι τα περίμενα νιώθω frustration',
                reponse: 'απογοήτευση' },
            { word: 'impatience',
                question: 'όταν μετράω τις μέρες για να πάω διακοπές νιώθω impatience',
                reponse: 'ανυπομονησία' },
            { word: 'ridicule',
                question: 'όταν κάποιος κατουριέται πάνω του σε δημόσιο χώρο γίνεται ',
                reponse: 'ρεζίλι' },
            { word: 'anxiété',
                question: 'όταν περιμένουμε τα αποτελέσματα εξετάσεων νιώθουμε anxiété',
                reponse: 'αγωνία' },
            { word: 'empathie',
                question: 'μπαίνω στη θέση σου , έχω empathie',
                reponse: 'ενσυναίσθηση' },
            { word: 'nombreuses',
                question: 'όχι 1 ούτε 2 αλλά nombreuses',
                reponse: 'πολυάριθμοι' },
            { word: 'etudes',
                question: 'οι επιστήμονες κάνουν πολλές etudes για να ανακαλύψουν πράγματα',
                reponse: 'έρευνες' },
            { word: 'certain',
                question: 'όχι κάτι το αόριστο αλλά κάτι το certain',
                reponse: 'συγκεκριμένος' },
            { word: 'attitude',
                question: 'ο τρόπος που συμπεριφέρονται διάφορα άτομα σε διάφορες περιστάσεις λέγεται attitude',
                reponse: 'στάση' },
            { word: 'ouverture d’esprit',
                question: 'όταν μεταναστεύεις στο εξωτερικό ή όταν ταξιδεύεις αποκτάς ouverture d’esprit',
                reponse: 'ανοιχτό πνεύμα' },
            { word: 'influencent',
                question: 'όταν οι γονείς παρεμβαίνουν και βάζουν λόγια influencent τα παιδιά τους  ρήμα γ’ πληθυντικό',
                reponse: 'επηρρεάζουν' },
            { word: 'étrangère',
                question: 'όχι ντόπιος étrangère',
                reponse: 'ξένος' },
            { word: 'à propos de',
                question: 'à propos de έχει να κάνει/σε σχέση',
                reponse: 'όσο αφορά' },
            { word: 'devant',
                question: 'όταν αφηγούμαι παραμύθι devant σε τάξη αγχώνομαι',
                reponse: 'μπροστά' },
            { word: 'important',
                question: 'όχι αμελητέο important',
                reponse: '9 γράμματα' },
            { word: 'ont été réalisées',
                question: 'ο αρραβώνας και ο γάμος μας ont été réalisées πέρσι ρήμα γ πληθυντικό ',
                reponse: 'πραγματοποιήθηκαν' },
            { word: 'apprentissage',
                question: 'ο δάσκαλος προσπαθεί να βοηθήσει στη apprentissage',
                reponse: 'μάθηση' },
            { word: 'partage',
                question: 'η ελεημοσύνη είναι ένα είδος partage',
                reponse: 'μοιρασιά' },
            { word: 'mal à l’aise',
                question: 'όταν δεν αισθάνομαι άνετα ,νιώθω mal à l’aise',
                reponse: 'άβολα' },
            { word: 'plateau',
                question: 'στον plateau έχει κιμωλία',
                reponse: 'πίνακας' },
            { word: 'papillon',
                question: 'Le papillon έχει άστατο χαρακτήρα και ζει στη φύση',
                reponse: '9 γράμματα' },
            { word: 'envoie',
                question: 'envoie ένα γράμμα',
                reponse: 'στέλνω' },
            { word: 'Par contre',
                question: 'Par contre όταν θέλω να εκφράσω μια άλλη γνώμη ή διαφωνώ',
                reponse: 'αντίθετα' },
            { word: 'ose',
                question: 'κάποιος ose να αφηγείται παραμύθια σε τάξεις',
                reponse: 'διστάζω' },
            { word: 'prendre le parole',
                question: 'prendre le parole είναι δύσκολο να κάνεις στο ζέλο',
                reponse: 'παίρνω λόγο' },
            { word: 'me tromper',
                question: 'όταν νυστάζω και είμαι κουρασμένος στη δουλειά μου μπορεί να me tromper',
                reponse: 'μπερδεύομαι' },
            { word: 'En fait',
                question: 'En fait όχι ψεύτικα',
                reponse: 'πραγματικά' },
            { word: 'corrige',
                question: 'ο δάσκαλος corrige τις εκθέσεις',
                reponse: 'διορθώνω' },
            { word: 'monde',
                question: 'σε εκδηλώσεις έχει πολύ monde',
                reponse: 'κόσμο' },
            { word: 'déteste',
                question: 'εσύ déteste τις κατσαρίδες',
                reponse: 'σιχαίνεσαι' },
            { word: 'ennuyeux',
                question: 'την είναι για σένα η ιστορία ennuyeux(το ρήμα είναι je m’ennuie)',
                reponse: 'βαρετή' },
            { word: 'répétitif',
                question: 'répétitif όταν κάτι δε γίνεται μόνο 1 φορά',
                reponse: 'επαναληπτικός' },
            { word: 'inventer',
                question: 'inventer ο Αρχιμήδης την άνωση',
                reponse: 'ανακάλυψε' },
            { word: 'motivant',
                question: 'το να μιλάς με τα ταίσματα τα σάββατα στα μπαλονίδια είναι motivation για να μάθεις τη γλώσσα (επίθετο motivant)',
                reponse: 'κίνητρο' },
            { word: 'assez',
                question: 'assez όχι λίγο ούτε πολύ',
                reponse: 'αρκετά' },
            { word: 'utile',
                question: 'utile όχι άχρηστος',
                reponse: 'χρήσιμος' },
            { word: 'J’ai du mal',
                question: 'J’ai du mal να τραγουδήσω',
                reponse: 'δυσκολεύομαι' },
            { word: 'prononcer',
                question: 'δεν κάνω καλά στα γαλλικά prononcer',
                reponse: 'προφέρω' },
            { word: 'voyelles',
                question: 'voyelles είναι τα α, ε, ι, ο, υ',
                reponse: 'φωνήεντα' },
            { word: 'nasale',
                question: 'κάποιοι τραγουδιστές μιλούν όχι τόσο με το στόμα αλλά nasale',
                reponse: 'ρινικά' },
            { word: 'difficile',
                question: 'τα κινέζικα είναι difficile',
                reponse: 'δύσκολα' },
            { word: 'mieux',
                question: 'ο mieux ο μαθητής ήμουν εγώ στην τάξη',
                reponse: 'καλύτερος' },
            { word: 'crois',
                question: 'crois τα νομίσματα στην τράπεζα (ρήμα)',
                reponse: 'νομίζω' },
            { word: 'important',
                question: 'αξίζει να του δώσεις σημασία ,είναι important',
                reponse: 'σημαντικός' },
            { word: 'fasse',
                question: 'μας fasse να μιλάμε (nous fasse parler)',
                reponse: 'k;anoyn' },
            { word: 'dois',
                question: 'οι νόμοι ορίζουν αυτά που dois να κάνω',
                reponse: 'πρέπει' },
            { word: 'cherche',
                question: 'στο κυνήγι του χαμένου θησαυρού cherche',
                reponse: 'ψάχνω' },
            { word: 'papillon',
                question: 'Le papillon έχει άστατο χαρακτήρα και ζει στη φύση',
                reponse: '9 γράμματα' },
            { word: 'mots',
                question: 'η κάθε γλώσσα έχει πολλές mots',
                reponse: 'λέξεις' },
            { word: 'dictionnaire',
                question: 'απαραίτητο όταν μαθαίνουμε μια καινούρια γλώσσα υπάρχει και online   dictionnaire',
                reponse: 'λεξικό' },
            { word: 'décourageant',
                question: 'αυτό που σε απελπίζει décourageant',
                reponse: 'αποθαρρυντικός' },
            { word: 'arrive a',
                question: 'όταν arrive a κάτι δύσκολο νιώθω ικανοποίηση',
                reponse: 'καταφέρνω' },
            { word: 'retenir',
                question: 'η επανάληψη βοηθάει να retenir το λεξιλόγιο',
                reponse: 'θυμάμαι' },
            { word: 'pose',
                question: 'σε μία συνέντευξη ο δημοσιογράφος pose πολλές ερωτήσεις',
                reponse: 'θέτω' },
            { word: 'papillon',
                question: 'Le papillon έχει άστατο χαρακτήρα και ζει στη φύση',
                reponse: '9 γράμματα' },
            { word: 'explique',
                question: 'είναι δύσκολο να explique στη γιαγιά γκρετς αυτά που θέλω',
                reponse: 'εξηγώ' },
            { word: 'sente',
                question: 'όταν έχεις περίοδο sente περίεργα',
                reponse: 'νιώθω' },
            { word: 'au long de',
                question: 'au long de της ζωής μας αποκτούμε πολλές εμπειρίες',
                reponse: 'στη διάρκεια' },
            { word: 'suivant',
                question: 'όχι ο προηγούμενος ,ο suivant',
                reponse: 'ακόλουθος' },
            { word: 'accueil',
                question: 'μια ρεσεπσιονιστ βρίσκεται στην accueil ενός ξενοδοχείου',
                reponse: 'είσοδος' },
            { word: 'entreprise',
                question: 'η amazon και η skype είναι ιδιωτικές entreprise',
                reponse: 'εταιρείες' },
            { word: 'information',
                question: 'το τουριστικό γραφείο δίνει information στους τουρίστες',
                reponse: 'πληροφορίες' },
        ];
        this.nativeAudio.preloadSimple('duck', 'assets/duck.wav');
    }
    onReady() {
        this.nativeAudio.preloadSimple('duck', 'assets/duck.wav');
        //this.curr_playing_file = this.media.create("assets/bravomousoudaki.m4a");
        //this.curr_playing_file.play();
        setTimeout(() => {
            this.playAudio('duck', 'assets/duck.wav');
        }, 700);
    }
    goButton() {
        this.playAudio('duck', 'assets/duck.wav');
    }
    playAudio(soundId, audioPath) {
        this.nativeAudio.preloadSimple(soundId, audioPath);
        //then(()=>{
        this.nativeAudio.setVolumeForComplexAsset('soundId', 0.6).then(
        //console.log('sets volume')
        );
        setTimeout(() => {
            this.nativeAudio.play(soundId, () => console.log(soundId + ' is done playing'));
        }, 500);
        //});
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_2__.NativeAudio }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content [fullscreen]=\"true\">\n  \n  <p>{{this.motsArray[0].word}} </p>\n  <textarea id=\"textarea\"></textarea>\n  <button (click)=\"this.goButton()\">GO</button>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map