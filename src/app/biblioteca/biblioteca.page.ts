import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BibliotecaService } from './services/biblioteca-service.service';
import { BarcodeScanner, BarcodeScannerOptions } from "@ionic-native/barcode-scanner/ngx";

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {

  encodedData: any;
  scannedBarCode: {};
  barcodeScannerOptions: BarcodeScannerOptions;
  libros: any

  constructor(private bibliotecaService: BibliotecaService,
     private router: Router,private scanner: BarcodeScanner) {

      this.encodedData = "Programming isn't about what you know";

      this.barcodeScannerOptions = {
        showTorchButton: true,
        showFlipCameraButton: true
      };

     }

  ngOnInit() {
    this.obtenerLibros()
  }

  scanBRcode() {
    this.scanner.scan().then(res => {
        this.scannedBarCode = res.text;
        this.router.navigateByUrl('/detalle/'+this.scannedBarCode);

      }).catch(err => {
        alert(err);
      });
  }

  obtenerLibros(){
    this.bibliotecaService.buscarLibros("dragon+ball").subscribe({
      next: resp=>{this.libros=resp, this.libros= this.libros.docs},
           error:err=>{console.log(err)}
    });

    }
    detalle(libro:any){
      this.router.navigateByUrl('/detalle/'+libro);
    }

    busqueda(palabra: string) {
      this.bibliotecaService.buscarLibros(palabra).subscribe({
        next: resp=>{this.libros=resp, this.libros= this.libros.docs},
             error:err=>{console.log(err)}
      });
  }
}
