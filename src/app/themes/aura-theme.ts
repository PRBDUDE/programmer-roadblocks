import Aura from "@primeng/themes/aura";
import {definePreset} from "@primeng/themes";

export const AuraPreset = definePreset(Aura, {
    primitive: {
        brown: {
            50: '#fbf7f5',
            100: '#ebdad0',
            200: '#dbbdac',
            300: '#cba087',
            400: '#bb8262',
            500: '#ab653d',
            600: '#915634',
            700: '#78472b',
            800: '#5e3822',
            900: '#442818',
            950: '#2b190f'
        },
        soho: {
            0: '#ffffff',
            50: '#ececec',
            100: '#dedfdf',
            200: '#c4c4c6',
            300: '#adaeb0',
            400: '#97979b',
            500: '#7f8084',
            600: '#6a6b70',
            700: '#55565b',
            800: '#3f4046',
            900: '#2c2c34',
            950: '#16161d',
        },
        viva: {
            0: '#ffffff',
            50: '#f3f3f3',
            100: '#e7e7e8',
            200: '#cfd0d0',
            300: '#b7b8b9',
            400: '#9fa1a1',
            500: '#87898a',
            600: '#6e7173',
            700: '#565a5b',
            800: '#3e4244',
            900: '#262b2c',
            950: '#0e1315',
        },
        ocean: {
            0: '#ffffff',
            50: '#fbfcfc',
            100: '#F7F9F8',
            200: '#EFF3F2',
            300: '#DADEDD',
            400: '#B1B7B6',
            500: '#828787',
            600: '#5F7274',
            700: '#415B61',
            800: '#29444E',
            900: '#183240',
            950: '#0c1920',
        },
        beach: {
            0: '#ffffff',
            50: '#fafbfb',
            100: '#e5eaea',
            200: '#d1d9da',
            300: '#bdc8c9',
            400: '#a8b8b9',
            500: '#94a7a8',
            600: '#7e8e8f',
            700: '#687576',
            800: '#515c5c',
            900: '#3b4343',
            950: '#252a2a',
        }
    },
    semantic: {
        primary: {
            50: "#f0f9ff",
            100: "#e0f2fe",
            200: "#bae6fd",
            300: "#7dd3fc",
            400: "#38bdf8",
            500: "#0ea5e9",
            600: "#0284c7",
            700: "#0369a1",
            800: "#075985",
            900: "#0c4a6e",
            950: "#082f49"
        },
        navigation: {
            list: {
                gap: "10px"
            }
        },
        colorScheme: {
            light: {
                navigation: {
                    item: {
                        focusBackground: "{surface.200}",
                    },
                    submenuLabel: {
                        background: "{surface.200}",
                    }
                }
            },
            dark: {
                navigation: {
                    item: {
                        focusBackground: "{surface.600}",
                    },
                    submenuLabel: {
                        background: "{surface.500}",
                        color: "{text.color}"
                    }
                }
            }
        }
    },
    components: {
        button: {
            colorScheme: {
                light: {
                    root: {
                        secondary: {
                            background: "{surface.300}",
                            hoverBackground: "{surface.400}",
                            activeBackground: "{surface.500}",
                            borderColor: "{surface.300}",
                            hoverBorderColor: "{surface.400}",
                            activeBorderColor: "{surface.500}",
                        }
                    }
                },
                dark: {
                    root: {
                        raisedShadow: "0 4px 2px -3px rgba(255, 255, 255, 0.2), 0 3px 4px 0 rgba(255, 255, 255, 0.14), 0 2px 7px 0 rgba(255, 255, 255, 0.12)",
                    }
                }
            }
        },
        datatable: {
            colorScheme: {
                dark: {
                    root: {
                        borderColor: "{surface.500}"
                    }
                }
            }
        },
        megamenu: {
            root: {
                horizontalOrientation: {
                    padding: "0.8rem 0.75rem",
                    gap: "1.5rem"
                }
            },
            submenuLabel: {
                background: "{navigation.submenu.label.background}",
            }
        },
        message: {
            colorScheme: {
                dark: {
                    info: {
                        color: "{blue.300}",
                    },
                    success: {
                        color: "{green.300}",
                    },
                    warn: {
                        color: "{yellow.300}",
                    },
                    error: {
                        color: "{red.400}",
                    }
                }
            }
        },
        timeline: {
            horizontal: {
                eventContent: {
                    padding: "1rem 0.75rem 1rem 0"
                }
            },
            vertical: {
                eventContent: {
                    padding: "0 1rem 0.75rem 1rem"
                }
            }
        },
        tooltip: {
            root: {
                maxWidth: "25rem",
            }
        }
    }
});
