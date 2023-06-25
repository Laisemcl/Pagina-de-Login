/*!
 * Alternância do modo de cores para os documentos do Bootstrap (https://getbootstrap.com/)
 * Copyright 2011-2023 Os autores do Bootstrap
 * Licenciado sob a Licença Creative Commons Attribution 3.0 Unported.
 */

(() => {
    'usar estrito'
  
    const getStoredTheme = () => localStorage.getItem('tema')
    const setStoredTheme = tema => localStorage.setItem('tema', tema)
  
    const getPreferredTheme = () => {
      const storedTheme = getStoredTheme()
      if (storedTheme) {
        return storedTheme
      }
  
      return window.matchMedia('(prefere o esquema de cores: escuro)').matches ? 'luz negra'
    }
  
    const setTheme = tema => {
      if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-bs-theme', 'dark')
      } outro {
        document.documentElement.setAttribute('data-bs-theme', tema)
      }
    }
  
    setTheme(getPreferredTheme())
  
    const showActiveTheme = (tema, foco = false) => {
      const themeSwitcher = document.querySelector('#bd-theme')
  
      if (!themeSwitcher) {
        retornar
      }
  
      const themeSwitcherText = document.querySelector('#bd-theme-text')
      const activeThemeIcon = document.querySelector('.theme-icon-active use')
      const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
      const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')
  
      document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
        element.classList.remove('active')
        element.setAttribute('aria-pressed', 'false')
      })
  
      btnToActive.classList.add('active')
      btnToActive.setAttribute('aria-pressed', 'true')
      activeThemeIcon.setAttribute('href', svgOfActiveBtn)
      const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
      themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)
  
      if (foco) {
        themeSwitcher.focus()
      }
    }
  
    window.matchMedia('(prefere o esquema de cores: escuro)').addEventListener('change', () => {
      const storedTheme = getStoredTheme()
      if (storedTheme !== 'light' && storedTheme !== 'dark') {
        setTheme(getPreferredTheme())
      }
    })
  
    window.addEventListener('DOMContentLoaded', () => {
      showActiveTheme(getPreferredTheme())
  
      document.querySelectorAll('[data-bs-theme-value]')
        .forEach(alternar => {
          toggle.addEventListener('click', () => {
            const theme = toggle.getAttribute('data-bs-theme-value')
            setStoredTheme(tema)
            setTheme(tema)
            showActiveTheme(tema, verdadeiro)
          })
        })
    })
  })()