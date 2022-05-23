import { Component } from '@angular/core';
//import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
import { Media } from '@ionic-native/media/ngx';
//import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  motsArray=[
   {word:'papillon',
   question:'Le papillon έχει άστατο χαρακτήρα και ζει στη φύση',
   reponse:'πεταλούδα'},

   {word:'détendue',
   question:'στο κολυμβητήριο η ατμόσφαιρα είναι détendue',
   reponse:'χαλαρωτικός'},

    
    {word:'lieus',
    question:'το σπίτι, το πάρκο, η καφετέρια είναι lieus',
    reponse:'μέρη'},

    {word:'debordent',
    question:'οι θάλασσες όταν έχει φουσκοθαλασσιά debordent (ρήμα γ’ πληθυντικό)',
    reponse:'ξεχειλίζουν'},

    {word:'emotions',
    question:'η λύπη και η χαρά είναι emotions εμοσιόν',
    reponse:'συναισθήματα'},

    {word:'frustration',
    question:'όταν τα πράγματα είναι χειρότερα από ό,τι τα περίμενα νιώθω frustration',
    reponse:'απογοήτευση'},

    {word:'impatience',
    question:'όταν μετράω τις μέρες για να πάω διακοπές νιώθω impatience',
    reponse:'ανυπομονησία'},

    {word:'ridicule', 
    question:'όταν κάποιος κατουριέται πάνω του σε δημόσιο χώρο γίνεται ',
    reponse:'ρεζίλι'},

    {word:'anxiété', 
    question:'όταν περιμένουμε τα αποτελέσματα εξετάσεων νιώθουμε anxiété',
    reponse:'αγωνία'},

    {word:'empathie', 
    question:'μπαίνω στη θέση σου , έχω empathie',
    reponse:'ενσυναίσθηση'},

    {word:'nombreuses', 
    question:'όχι 1 ούτε 2 αλλά nombreuses',
    reponse:'πολυάριθμοι'},

    {word:'etudes', 
    question:'οι επιστήμονες κάνουν πολλές etudes για να ανακαλύψουν πράγματα',
    reponse:'έρευνες'},

    {word:'certain', 
    question:'όχι κάτι το αόριστο αλλά κάτι το certain',
    reponse:'συγκεκριμένος'},

    {word:'attitude', 
    question:'ο τρόπος που συμπεριφέρονται διάφορα άτομα σε διάφορες περιστάσεις λέγεται attitude',
   reponse:'στάση'},

    {word:'ouverture d’esprit', 
    question:'όταν μεταναστεύεις στο εξωτερικό ή όταν ταξιδεύεις αποκτάς ouverture d’esprit',
    reponse:'ανοιχτό πνεύμα'},

    {word:'influencent', 
    question:'όταν οι γονείς παρεμβαίνουν και βάζουν λόγια influencent τα παιδιά τους  ρήμα γ’ πληθυντικό',
    reponse:'επηρρεάζουν'},

    {word:'étrangère', 
    question:'όχι ντόπιος étrangère',
    reponse:'ξένος'},

    {word:'à propos de', 
    question:'à propos de έχει να κάνει/σε σχέση',
    reponse:'όσο αφορά'},

    {word:'devant', 
    question:'όταν αφηγούμαι παραμύθι devant σε τάξη αγχώνομαι',
    reponse:'μπροστά'},

    {word:'important', 
    question:'όχι αμελητέο important',
    reponse:'9 γράμματα'},

    {word:'ont été réalisées', 
    question:'ο αρραβώνας και ο γάμος μας ont été réalisées πέρσι ρήμα γ πληθυντικό ',
    reponse:'πραγματοποιήθηκαν'},

    {word:'apprentissage', 
    question:'ο δάσκαλος προσπαθεί να βοηθήσει στη apprentissage',
    reponse:'μάθηση'},

    {word:'partage', 
    question:'η ελεημοσύνη είναι ένα είδος partage',
    reponse:'μοιρασιά'},

    {word:'mal à l’aise', 
    question:'όταν δεν αισθάνομαι άνετα ,νιώθω mal à l’aise',
    reponse:'άβολα'},

    {word:'plateau', 
    question:'στον plateau έχει κιμωλία',
    reponse:'πίνακας'},

    {word:'papillon', 
    question:'Le papillon έχει άστατο χαρακτήρα και ζει στη φύση',
    reponse:'9 γράμματα'},

    {word:'envoie', 
    question:'envoie ένα γράμμα',
    reponse:'στέλνω'},

    {word:'Par contre', 
    question:'Par contre όταν θέλω να εκφράσω μια άλλη γνώμη ή διαφωνώ',
    reponse:'αντίθετα'},

    {word:'ose', 
    question:'κάποιος ose να αφηγείται παραμύθια σε τάξεις',
    reponse:'διστάζω'},

    {word:'prendre le parole', 
    question:'prendre le parole είναι δύσκολο να κάνεις στο ζέλο',
    reponse:'παίρνω λόγο'},

    {word:'me tromper', 
    question:'όταν νυστάζω και είμαι κουρασμένος στη δουλειά μου μπορεί να me tromper',
    reponse:'μπερδεύομαι'},

    {word:'En fait', 
    question:'En fait όχι ψεύτικα',
    reponse:'πραγματικά'},

    {word:'corrige', 
    question:'ο δάσκαλος corrige τις εκθέσεις',
    reponse:'διορθώνω'},

    {word:'monde', 
    question:'σε εκδηλώσεις έχει πολύ monde',
    reponse:'κόσμο'},

    {word:'déteste', 
    question:'εσύ déteste τις κατσαρίδες',
    reponse:'σιχαίνεσαι'},

    {word:'ennuyeux', 
    question:'την είναι για σένα η ιστορία ennuyeux(το ρήμα είναι je m’ennuie)',
    reponse:'βαρετή'},

    {word:'répétitif', 
    question:'répétitif όταν κάτι δε γίνεται μόνο 1 φορά',
    reponse:'επαναληπτικός'},

    {word:'inventer', 
    question:'inventer ο Αρχιμήδης την άνωση',
    reponse:'ανακάλυψε'},

    {word:'motivant', 
    question:'το να μιλάς με τα ταίσματα τα σάββατα στα μπαλονίδια είναι motivation για να μάθεις τη γλώσσα (επίθετο motivant)',
    reponse:'κίνητρο'},

    {word:'assez', 
    question:'assez όχι λίγο ούτε πολύ',
    reponse:'αρκετά'},

    {word:'utile', 
    question:'utile όχι άχρηστος',
    reponse:'χρήσιμος'},

    {word:'J’ai du mal', 
    question:'J’ai du mal να τραγουδήσω',
    reponse:'δυσκολεύομαι'},

    {word:'prononcer', 
    question:'δεν κάνω καλά στα γαλλικά prononcer',
    reponse:'προφέρω'},

    {word:'voyelles', 
    question:'voyelles είναι τα α, ε, ι, ο, υ',
    reponse:'φωνήεντα'},

    {word:'nasale', 
    question:'κάποιοι τραγουδιστές μιλούν όχι τόσο με το στόμα αλλά nasale',
    reponse:'ρινικά'},

    {word:'difficile', 
    question:'τα κινέζικα είναι difficile',
    reponse:'δύσκολα'},

    {word:'mieux', 
    question:'ο mieux ο μαθητής ήμουν εγώ στην τάξη',
    reponse:'καλύτερος'},

    {word:'crois', 
    question:'crois τα νομίσματα στην τράπεζα (ρήμα)',
    reponse:'νομίζω'},

    {word:'important', 
    question:'αξίζει να του δώσεις σημασία ,είναι important',
    reponse:'σημαντικός'},

    {word:'fasse', 
    question:'μας fasse να μιλάμε (nous fasse parler)',
    reponse:'k;anoyn'},

    {word:'dois', 
    question:'οι νόμοι ορίζουν αυτά που dois να κάνω',
    reponse:'πρέπει'},

    {word:'cherche', 
    question:'στο κυνήγι του χαμένου θησαυρού cherche',
    reponse:'ψάχνω'},

    {word:'papillon', 
    question:'Le papillon έχει άστατο χαρακτήρα και ζει στη φύση',
    reponse:'9 γράμματα'},

    {word:'mots', 
    question:'η κάθε γλώσσα έχει πολλές mots',
    reponse:'λέξεις'},

    {word:'dictionnaire', 
    question:'απαραίτητο όταν μαθαίνουμε μια καινούρια γλώσσα υπάρχει και online   dictionnaire',
    reponse:'λεξικό'},

    {word:'décourageant', 
    question:'αυτό που σε απελπίζει décourageant',
    reponse:'αποθαρρυντικός'},
  
    {word:'arrive a', 
    question:'όταν arrive a κάτι δύσκολο νιώθω ικανοποίηση',
    reponse:'καταφέρνω'},

    {word:'retenir', 
    question:'η επανάληψη βοηθάει να retenir το λεξιλόγιο',
    reponse:'θυμάμαι'},

    {word:'pose', 
    question:'σε μία συνέντευξη ο δημοσιογράφος pose πολλές ερωτήσεις',
    reponse:'θέτω'},

    {word:'papillon', 
    question:'Le papillon έχει άστατο χαρακτήρα και ζει στη φύση',
    reponse:'9 γράμματα'},
    
    {word:'explique', 
    question:'είναι δύσκολο να explique στη γιαγιά γκρετς αυτά που θέλω',
    reponse:'εξηγώ'},

    {word:'sente', 
    question:'όταν έχεις περίοδο sente περίεργα',
    reponse:'νιώθω'},

    {word:'au long de', 
    question:'au long de της ζωής μας αποκτούμε πολλές εμπειρίες',
    reponse:'στη διάρκεια'},

    {word:'suivant', 
    question:'όχι ο προηγούμενος ,ο suivant',
    reponse:'ακόλουθος'},

    {word:'accueil', 
    question:'μια ρεσεπσιονιστ βρίσκεται στην accueil ενός ξενοδοχείου',
    reponse:'είσοδος'},

    {word:'entreprise', 
    question:'η amazon και η skype είναι ιδιωτικές entreprise',
    reponse:'εταιρείες'},

    {word:'information', 
    question:'το τουριστικό γραφείο δίνει information στους τουρίστες',
    reponse:'πληροφορίες'},
 ];


  constructor(//private nativeAudio: NativeAudio,
    private media: Media ) {
    //this.nativeAudio.preloadSimple('duck','assets/duck.wav');

  }

  
  
  onReady(){
    //this.nativeAudio.preloadSimple('duck','assets/duck.wav');
    //this.curr_playing_file = this.media.create("assets/bravomousoudaki.m4a");
    //this.curr_playing_file.play();
    //setTimeout(() => {
      //this.playAudio('duck','assets/duck.wav');

    //}, 700);
  }

  goButton(){
    this.playAudio('duck','assets/duck.wav');

  }

  playAudio(soundId,audioPath){
    /*this.nativeAudio.preloadSimple(soundId, audioPath);
    //then(()=>{
      this.nativeAudio.setVolumeForComplexAsset('soundId', 0.6).then(
        //console.log('sets volume')
      );
      setTimeout(() => {
        this.nativeAudio.play(soundId, () =>
        console.log(soundId+' is done playing'));
    }, 500);*/

    //});
}
  /*playAudio(audioPath){
    this.nativeAudio.preloadSimple('uniqueId1', audioPath).
    then(()=>{
    this.nativeAudio.play('uniqueId1', () =>
    console.log('uniqueId1 is done playing'));
    });
}*/
  /*playSound(){
    let zero = this.media.create(`assets/bravomousoudaki.m4a`);
    zero.setVolume(1);
    zero.play();
    /*this.nativeAudio.preloadSimple('uniqueId1', 'assets/bravomousoudaki.m4a').then(onSuccess, onError);
    //this.nativeAudio.preloadComplex('uniqueId2', 'path/to/file2.mp3', 1, 1, 0).then(onSuccess, onError);

    this.nativeAudio.play('uniqueId1').then(onSuccess, onError);

    // can optionally pass a callback to be called when the file is done playing
    this.nativeAudio.play('uniqueId1', () => console.log('uniqueId1 is done playing'));

    //this.nativeAudio.loop('uniqueId2').then(onSuccess, onError);

    //this.nativeAudio.setVolumeForComplexAsset('uniqueId2', 0.6).then(onSuccess,onError);

    //this.nativeAudio.stop('uniqueId1').then(onSuccess,onError);

    this.nativeAudio.unload('uniqueId1').then(onSuccess,onError);
    //

  }*/
}
