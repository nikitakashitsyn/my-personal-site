class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #1a1a2e;
          color: #e6e6e6;
          padding: 2rem 1rem;
          text-align: center;
          border-top: 1px solid #2a2a3a;
        }
.footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }
        .social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #4e4e6a;
width: 40px;
          height: 40px;
          border-radius: 50%;
          margin: 0 10px;
          transition: all 0.3s ease;
        }
        .social-link:hover {
          background: #6d6d8a;
transform: translateY(-3px);
        }
        .copyright {
          margin-top: 1rem;
          color: #a0a0a0;
font-size: 0.9rem;
        }
</style>
      <footer>
        <div class="footer-content">
        <a href="https://t.me/asasin4351" target="_blank" class="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </a>
<p class="copyright">© 2025 Кашицын Никита Андреевич. Все права защищены.</p>
</div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);