import { createTheme } from 'flowbite-react'

export const customTheme = createTheme({
  button: {
    root: {
      base: 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 font-[family-name:var(--fontFamily-button,\'Atkinson_Hyperlegible\',sans-serif)] tracking-wide',
      size: {
        xs: 'px-2 py-1 text-xs',
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-sm',
        lg: 'px-5 py-2.5 text-base',
        xl: 'px-6 py-3 text-base',
      },
      color: {
        // Primary: solid purple with shadows
        primary: 'bg-primary-700 text-white border border-transparent hover:bg-primary-800 active:bg-primary-900 shadow-[0_4px_6px_-1px_rgba(37,1,90,0.06),0_4px_8px_-1px_rgba(37,1,90,0.08)] hover:shadow-[0_6px_8px_-1px_rgba(37,1,90,0.08),0_6px_12px_-1px_rgba(37,1,90,0.12)] active:shadow-[0_2px_4px_-1px_rgba(37,1,90,0.08),0_2px_6px_-1px_rgba(37,1,90,0.12)]',
        // Secondary: solid slate with shadows
        secondary: 'bg-secondary-700 text-white border border-transparent hover:bg-secondary-800 active:bg-secondary-900 shadow-[0_4px_6px_-1px_rgba(47,48,58,0.1),0_4px_8px_-1px_rgba(47,48,58,0.15)] hover:shadow-[0_6px_8px_-1px_rgba(47,48,58,0.12),0_6px_12px_-1px_rgba(47,48,58,0.18)] active:shadow-[0_2px_4px_-1px_rgba(47,48,58,0.12),0_2px_6px_-1px_rgba(47,48,58,0.18)]',
        // Outline: primary-50 bg, primary-700 border/text
        outline: 'bg-primary-50 text-primary-700 border border-primary-700 hover:bg-primary-100 hover:text-primary-800 hover:border-primary-800 active:bg-primary-200 active:text-primary-900 active:border-primary-900 shadow-[0_4px_6px_-1px_rgba(37,1,90,0.06),0_4px_8px_-1px_rgba(37,1,90,0.08)] hover:shadow-[0_6px_8px_-1px_rgba(37,1,90,0.08),0_6px_12px_-1px_rgba(37,1,90,0.12)] active:shadow-[0_2px_4px_-1px_rgba(37,1,90,0.08),0_2px_6px_-1px_rgba(37,1,90,0.12)]',
        // Disabled: white bg, neutral border/text
        disabled: 'bg-white text-neutral-400 border border-neutral-400 cursor-not-allowed shadow-none',
      },
    },
  },
  badge: {
    root: {
      // 1. Keep the base layout clean
      base: "inline-flex items-center font-medium border border-transparent",
      size: {
        xs: "text-xs px-1.5 py-0.5",
        sm: "text-sm px-2 py-1",
      },
      // 2. Control border radius variations cleanly here (Now featuring a distinct Chip visual style!)
      rounded: {
        default: "rounded",          // Lightly rounded box (4px) - Great for statuses
        pill: "rounded-full",        // Fully round capsule - Great for counts/unread badges
        chip: "rounded-full px-2.5", // Capsule corners with slightly narrower padding - Great for tags
        iconOnly: "rounded-full",
      },
      // 3. Clean, semantic color foundations using your custom "primary" & "secondary" configurations
      color: {
        primary: "bg-primary-50 text-primary-700 border-primary-200/60 dark:bg-primary-900/30 dark:text-primary-300 dark:border-primary-800/50",
        secondary: "bg-secondary-50 text-secondary-700 border-secondary-200/60 dark:bg-secondary-900/30 dark:text-secondary-300 dark:border-secondary-800/50",
        alternative: "bg-slate-100 text-slate-800 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700",
        gray: "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700",
        danger: "bg-red-50 text-red-700 border-red-200/60 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800/50",
        success: "bg-emerald-50 text-emerald-700 border-emerald-200/60 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800/50",
        warning: "bg-amber-50 text-amber-800 border-amber-200/60 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800/50",
      },
    },

    // 4. Icons reside strictly in the dedicated icon slot
    icon: {
      on: "flex items-center gap-1",
      off: "",
      size: {
        xs: "h-3 w-3",
        sm: "h-3.5 w-3.5",
      },
    },

    // 5. Dots reside in the dedicated dot slot
    dot: {
      base: "h-1.5 w-1.5 rounded-full me-1 bg-current", // inherits theme color dynamically!
    },

    // 6. Loading spinners reside in the dedicated loader slot
    loader: {
      base: "w-3 h-3 me-1 animate-spin",
    },

    // 7. Interactive chips can be dismissed. Close actions are padded beautifully here
    dismiss: {
      base: "inline-flex items-center p-0.5 ms-1.5 text-sm bg-transparent rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors",
      icon: "w-3 h-3",
    },
  },
})
