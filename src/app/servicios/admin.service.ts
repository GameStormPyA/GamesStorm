import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Plataforma } from "../AdminClass/plataforma";
import { Categoria } from "../AdminClass/categoria";
import { Genero } from "../AdminClass/genero";
import { User } from "../AdminClass/user";
import { Juego } from "../AdminClass/juego";
import { RelacionJuego } from "../AdminClass/relacion-juego";
import { RelacionAccesorio } from "../AdminClass/relacion-accesorio";
import { Accesorio } from "../AdminClass/accesorio";
import { Subasta } from "../AdminClass/subasta";
import { Puja } from "../AdminClass/puja";
import { ComentarioJuego } from "../AdminClass/comentario-juego";
import { ComentarioAccesorio } from "../AdminClass/comentario-accesorio";
import { CompraAccesorio } from "../AdminClass/compra-accesorio";
import { CompraJuego } from "../AdminClass/compra-juego";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  //Plataforma
  getPlataforma():Observable<Plataforma[]>{
    return this.http.get<Plataforma[]>(`${this.baseUrl}/getPlataforma.php`);
  }

  DeletePlataforma(plataforma : Plataforma){
    return this.http.delete(`${this.baseUrl}/DeletePlataforma.php?Id=${plataforma.Id}`);
  }

  addPlataforma(plataforma: Plataforma){
    return this.http.post(`${this.baseUrl}/AgregarPlataforma.php`, plataforma);
  }

  EditPlataforma(plataforma: Plataforma){
    return this.http.post(`${this.baseUrl}/EditPlataforma.php`, plataforma);
  }
  //Categoria
  getCategoria():Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${this.baseUrl}/getCategoria.php`);
  }
  DeleteCategoria(categoria: Categoria){
    return this.http.delete(`${this.baseUrl}/DeleteCategoria.php?Id=${categoria.Id}`);
  }
  addCategoria(categoria: Categoria){
    return this.http.post(`${this.baseUrl}/AgregarCategoria.php`, categoria);
  }
  EditCategoria(categoria: Categoria) {
    return this.http.post(`${this.baseUrl}/EditCategoria.php`, categoria);
  }
  //Genero
  getGenero():Observable<Genero[]>{
    return this.http.get<Genero[]>(`${this.baseUrl}/getGenero.php`);
  }
  DeleteGenero(genero: Genero){
    return this.http.delete(`${this.baseUrl}/DeleteGenero.php?Id=${genero.Id}`);
  }
  addGenero(genero: Genero){
    return this.http.post(`${this.baseUrl}/AgregarGenero.php`, genero);
  }
  EditGenero(genero: Genero) {
    return this.http.post(`${this.baseUrl}/EditGenero.php`, genero);
  }
  //User
  getUser():Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/getUser.php`);
  }
  DeleteUser(user: User){
    return this.http.delete(`${this.baseUrl}/DeleteUser.php?Id=${user.Id}`);
  }
  addUser(user: User){
    return this.http.post(`${this.baseUrl}/AgregarUser.php`, user);
  }
  EditUser(user: User) {
    return this.http.post(`${this.baseUrl}/EditUser.php`, user);
  }
  getUserSelecionada(Id: string | number ):Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/getUserSelecionada.php?Id=${Id}`);
  }
  //juego
  getJuegos():Observable<Juego[]>{
    return this.http.get<Juego[]>(`${this.baseUrl}/getJuegos.php`);
  }
  DeleteJuego(juego: Juego){
    return this.http.delete(`${this.baseUrl}/DeleteJuego.php?Id=${juego.Id}`);
  }
  addJuego(juego: Juego){
    return this.http.post(`${this.baseUrl}/AgregarJuego.php`, juego);
  }
  EditJuego(juego: Juego) {
    return this.http.post(`${this.baseUrl}/EditJuego.php`, juego);
  }
  getJuegoSelecionada(Id: string | number ){
    return this.http.get(`${this.baseUrl}/getJuegoSelecionada.php?Id=${Id}`);
  }
  //RelacionJuego
  getRelacionJuego():Observable<RelacionJuego[]>{
    return this.http.get<RelacionJuego[]>(`${this.baseUrl}/getRelacionJuego.php`);
  }
  DeleteRelacionJuego(relacionJuego: RelacionJuego){
    return this.http.delete(`${this.baseUrl}/DeleteRelacionJuego.php?Id_Juego=${relacionJuego.Id_Juego}&Id_Plataforma=${relacionJuego.Id_Plataforma}`);
  }
  addRelacionJuego(relacionJuego: RelacionJuego){
    return this.http.post(`${this.baseUrl}/AgregarRelacionJuego.php`, relacionJuego);
  }
  EditRelacionJuego(relacionJuego: RelacionJuego) {
    return this.http.post(`${this.baseUrl}/EditRelacionJuego.php`, relacionJuego);
  }
  getRelacionJuegoSelecionada(Id_Juego: string | number , Id_Plataforma: string | number){
    return this.http.get(`${this.baseUrl}/getRelacionJuegoSelecionada.php?Id_Juego=${Id_Juego}&Id_Plataforma=${Id_Plataforma}`);
  }
   //Accesorio
   getAccesorio():Observable<Accesorio[]>{
    return this.http.get<Accesorio[]>(`${this.baseUrl}/getAccesorios.php`);
  }
  DeleteAccesorio(accesorio: Accesorio){
    return this.http.delete(`${this.baseUrl}/DeleteAccesorios.php?Id=${accesorio.Id}`);
  }
  addAccesorio(accesorio: Accesorio){
    return this.http.post(`${this.baseUrl}/AgregarAccesorios.php`, accesorio);
  }
  EditAccesorio(accesorio: Accesorio) {
    return this.http.post(`${this.baseUrl}/EditAccesorio.php`, accesorio);
  }
  getAccesorioSelecionada(Id: string | number ){
    return this.http.get(`${this.baseUrl}/getAccesorioSelecionada.php?Id=${Id}`);
  }
  //RelacionAccesorio
  getRelacionAccesorio():Observable<RelacionAccesorio[]>{
    return this.http.get<RelacionAccesorio[]>(`${this.baseUrl}/getRelacionAccesorio.php`);
  }
  DeleteRelacionAccesorio(relacionAccesorio: RelacionAccesorio){
    return this.http.delete(`${this.baseUrl}/DeleteRelacionAccesorio.php?Id_Accesorio=${relacionAccesorio.Id_Accesorio}&Id_Plataforma=${relacionAccesorio.Id_Plataforma}`);
  }
  addRelacionAccesorio(relacionAccesorio: RelacionAccesorio){
    return this.http.post(`${this.baseUrl}/AgregarRelacionAccesorio.php`, relacionAccesorio);
  }
  EditRelacionAccesorio(relacionAccesorio: RelacionAccesorio) {
    return this.http.post(`${this.baseUrl}/EditRelacionAccesorio.php`, relacionAccesorio);
  }
  getRelacionAccesorioSelecionada(Id_Accesorio: string | number , Id_Plataforma: string | number){
    return this.http.get(`${this.baseUrl}/getRelacionAccesorioSelecionada.php?Id_Accesorio=${Id_Accesorio}&Id_Plataforma=${Id_Plataforma}`);
  }
  //Subasta
  getSubasta(){
    return this.http.get(`${this.baseUrl}/getSubastas.php`);
  }
  DeleteSubasta(subasta: Subasta){
    return this.http.delete(`${this.baseUrl}/DeleteSubasta.php?Id=${subasta.Id}`);
  }
  addSubasta(subasta: Subasta){
    return this.http.post(`${this.baseUrl}/AgregarSubasta.php`, subasta);
  }
  EditSubasta(subasta: Subasta) {
    return this.http.post(`${this.baseUrl}/EditSubasta.php`, subasta);
  }
  getSubastaSelecionada(Id: string | number ){
    return this.http.get(`${this.baseUrl}/getSubastaSelecionada.php?Id=${Id}`);
  }
  //Puja
  getPuja():Observable<Puja[]>{
    return this.http.get<Puja[]>(`${this.baseUrl}/getPujas.php`);
  }
  DeletePuja(puja: Puja){
    return this.http.delete(`${this.baseUrl}/DeletePuja.php?Id_Subasta=${puja.Id_Subasta}&Id_User=${puja.Id_User}`);
  }
  addPuja(puja: Puja){
    return this.http.post(`${this.baseUrl}/AgregarPuja.php`, puja);
  }
  EditPuja(puja: Puja) {
    return this.http.post(`${this.baseUrl}/EditPujas.php`, puja);
  }
  getPujaSelecionada(Id_Subasta: string | number , Id_User: string | number){
    return this.http.get(`${this.baseUrl}/getPujaSelecionada.php?Id_Subasta=${Id_Subasta}&Id_User=${Id_User}`);
  }
  //ComentarioJuego
  getComentarioJuego(){
    return this.http.get(`${this.baseUrl}/getComentarioJuego.php`);
  }
  DeleteComentarioJuego(comentarioJuego: ComentarioJuego){
    return this.http.delete(`${this.baseUrl}/DeleteComentarioJuego.php?Id_Juego=${comentarioJuego.Id_Juego}&Id_User=${comentarioJuego.Id_User}`);
  }
  addComentarioJuego(comentarioJuego: ComentarioJuego){
    return this.http.post(`${this.baseUrl}/AgregarComentarioJuego.php`, comentarioJuego);
  }
  EditComentarioJuego(comentarioJuego: ComentarioJuego) {
    return this.http.post(`${this.baseUrl}/EditComentarioJuego.php`, comentarioJuego);
  }
  getComentarioJuegoSelecionada(Id_Juego: string | number , Id_User: string | number){
    return this.http.get(`${this.baseUrl}/getComentarioJuegoSelecionada.php?Id_Juego=${Id_Juego}&Id_User=${Id_User}`);
  }
  //ComentarioAccesorio
  getComentarioAccesorio(){
    return this.http.get(`${this.baseUrl}/getComentarioAccesorio.php`);
  }
  DeleteComentarioAccesorio(ComentarioAccesorio: ComentarioAccesorio){
    return this.http.delete(`${this.baseUrl}/DeleteComentarioAccesorio.php?Id_Accesorio=${ComentarioAccesorio.Id_Accesorio}&Id_User=${ComentarioAccesorio.Id_User}`);
  }
  addComentarioAccesorio(ComentarioAccesorio: ComentarioAccesorio){
    return this.http.post(`${this.baseUrl}/AgregarComentarioAccesorio.php`, ComentarioAccesorio);
  }
  EditComentarioAccesorio(ComentarioAccesorio: ComentarioAccesorio) {
    return this.http.post(`${this.baseUrl}/EditComentarioAccesorio.php`, ComentarioAccesorio);
  }
  getComentarioAccesorioSelecionada(Id_Accesorio: string | number , Id_User: string | number){
    return this.http.get(`${this.baseUrl}/getComentarioAccesorioSelecionada.php?Id_Accesorio=${Id_Accesorio}&Id_User=${Id_User}`);
  }
  //CompraAccesorio
  getCompraAccesorio():Observable<CompraAccesorio[]>{
    return this.http.get<CompraAccesorio[]>(`${this.baseUrl}/getCompraAccesorio.php`);
  }
  DeleteCompraAccesorio(compraAccesorio: CompraAccesorio){
    return this.http.delete(`${this.baseUrl}/DeleteCompraAccesorio.php?Id_Accesorio=${compraAccesorio.Id_Accesorios}&Id_User=${compraAccesorio.Id_User}&Id_Plaforma=${compraAccesorio.Id_Plaforma}`);
  }
  addCompraAccesorio(compraAccesorio: CompraAccesorio){
    return this.http.post(`${this.baseUrl}/AgregarCompraAccesorio.php`, compraAccesorio);
  }
  EditCompraAccesorio(compraAccesorio: CompraAccesorio) {
    return this.http.post(`${this.baseUrl}/EditCompraAccesorio.php`, compraAccesorio);
  }
  getCompraAccesorioSelecionada(Id_Accesorios: string | number , Id_User: string | number, Id_Plaforma: string | number){
    return this.http.get(`${this.baseUrl}/getCompraAccesorioSelecionada.php?Id_Accesorios=${Id_Accesorios}&Id_User=${Id_User}&Id_Plaforma=${Id_Plaforma}`);
  }
   //CompraJuego
   getCompraJuego():Observable<CompraJuego[]>{
    return this.http.get<CompraJuego[]>(`${this.baseUrl}/getCompraJuego.php`);
  }
  DeleteCompraJuego(compraJuego: CompraJuego){
    return this.http.delete(`${this.baseUrl}/DeleteCompraJuego.php?Id_Juego=${compraJuego.Id_Juego}&Id_User=${compraJuego.Id_User}&Id_Plaforma=${compraJuego.Id_Plaforma}`);
  }
  addCompraJuego(compraJuego: CompraJuego){
    return this.http.post(`${this.baseUrl}/AgregarCompraJuego.php`, compraJuego);
  }
  EditCompraJuego(compraJuego: CompraJuego) {
    return this.http.post(`${this.baseUrl}/EditCompraJuego.php`, compraJuego);
  }
  getCompraJuegoSelecionada(Id_Juego: string | number , Id_User: string | number, Id_Plaforma: string | number){
    return this.http.get(`${this.baseUrl}/getCompraJuegoSelecionada.php?Id_Juego=${Id_Juego}&Id_User=${Id_User}&Id_Plaforma=${Id_Plaforma}`);
  }

  //COMRA CARRITO
  addCompraJuegoCarrito(compraJuego: CompraJuego){
    return this.http.post(`${this.baseUrl}/AgregarCompraJuegoCarrito.php`, compraJuego);
  }
  addCompraAccesorioCarrito(CompraAccesorio: CompraAccesorio){
    return this.http.post(`${this.baseUrl}/AgregarCompraAccesorioCarrito.php`, CompraAccesorio);
  }
  
}
