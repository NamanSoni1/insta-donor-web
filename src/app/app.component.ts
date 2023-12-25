import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ProcessComponent } from "./process/process.component";

import { ContactComponent } from "./contact-us/contact.component";
import { RegistrationComponent } from "./registration/registration.component";
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './service/data.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HomeComponent, AboutUsComponent, GalleryComponent, ProcessComponent, ContactComponent, RegistrationComponent, HttpClientModule],
    providers: [DataService],
})
export class AppComponent {
  title = 'blood-donation';
}
