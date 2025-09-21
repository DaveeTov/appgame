import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    // Aquí se eliminan los validadores para que el botón esté siempre activo
    this.loginForm = this.fb.group({
      email: [''], // Campo de email sin validadores
      password: [''] // Campo de contraseña sin validadores
    });
  }

  ngOnInit() {}

  isMobile(): boolean {
    return window.innerWidth <= 1024;
  }

  onLogin() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
      // Redirige al nuevo componente home-login
      this.router.navigate(['/homelogin']);
    }, 2000); // 2 segundos de simulación de carga
  }

  onSocialLogin(provider: string) {
    console.log(`Login with ${provider}`);
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  forgotPassword() {
    console.log('Forgot password clicked');
  }
}