/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './resources/**/*.svg',
        './content/**/*.md',
    ],
    theme: {
        fluidSpacing: {
          xxs: 'var(--size-xxs)',
          xs: 'var(--size-xs)',
          sm: 'var(--size-sm)',
          100: 'var(--size-100)',
          200: 'var(--size-200)',
          250: 'calc(var(--size-200) + 1px)',
          300: 'var(--size-300)',
          350: 'calc(var(--size-300) + 1px)',
          400: 'var(--size-400)',
          450: 'calc(var(--size-400) + 2px)',
          500: 'var(--size-500)',
          550: 'calc(var(--size-500) * 1.15)',
          600: 'var(--size-600)',
          650: 'calc(var(--size-600) * 1.15)',
          700: 'var(--size-700)',
          750: 'calc(var(--size-700) * 1.15)',
          800: 'var(--size-800)',
          850: 'calc(var(--size-800) * 1.2)',
          900: 'var(--size-900)',
          950: 'calc(var(--size-900) * 1.2)',
          lg: 'var(--size-lg)',
          xl: 'var(--size-xl)',
          xxl: 'var(--size-xxl)',
          huge: 'var(--size-huge)',
          gutter: 'var(--gutter)',
          container: 'var(--container-padding)',
        },
        extend: {
          padding: (theme) => theme('fluidSpacing'),
          margin: (theme) => theme('fluidSpacing'),
          spacing: (theme) => theme('fluidSpacing'),
          gap: (theme) => theme('fluidSpacing'),
          fontSize: (theme) => theme('fluidSpacing'),
          flexGrow: {
            9: '9999',
          },
          colors: {
            'primary-glare': '#E25F50',
            'primary': '#E82F19',
            'primary-shade': '#C21E0A',
            'dark-glare': '#17283B',
            'dark': '#122130',
            'dark-shade': '#0E1823',
            'light-glare': '#F5F3F3',
            'light': '#EDE9E9',
            'light-shade': '#E3DDDD',
          },
          lineHeight: {
            flat: '1.15',
          },
          borderWidth: {
            gutter: 'var(--gutter)',
          },
          boxShadow: {
            custom_small: '0 0 20px 0 rgb(0 0 0 / 0.45);',
            custom_two: '0 0 25px 0 rgb(0 0 0 / 0.45);',
            custom: '0 0 45px 0 rgb(0 0 0 / 0.45);',
            custom_dark: '0 0 45px 0 rgb(0 0 0 / 0.75);',
            custom_light: '0 0 45px 0 rgb(0 0 0 / 0.15);'
          },
          fontFamily: {
            base: ['Inter','Helvetica','Arial','Lucida','sans-serif'],
            heading: ['Poppins','Helvetica','Arial','Lucida','sans-serif'],
          },
        },
      },
      plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries')
      ],
};
