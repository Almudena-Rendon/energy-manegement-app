  export const requestData = [
    {
      category: "balance",
      widgets: ["balance-electrico"],
    },
    {
      category: "generacion",
      widgets: [
        "estructura-generacion",
        "evolucion-renovable-no-renovable",
        "estructura-renovables",
        "estructura-generacion-emisiones-asociadas",
        "evolucion-estructura-generacion-emisiones-asociadas",
        "no-renovables-detalle-emisiones-CO2",
        "maxima-renovable",
        "potencia-instalada",
        "maxima-renovable-historico",
        "maxima-sin-emisiones-historico",
      ],
    },
    {
      category: "intercambios",
      widgets: [
        "francia-frontera",
        "portugal-frontera",
        "marruecos-frontera",
        "andorra-frontera",
        "lineas-marruecos",
        "francia-frontera-programado",
        "portugal-frontera-programado",
        "marruecos-frontera-programado",
        "andorra-frontera-programado",
        "enlace-baleares",
        "frontera-fisicos",
        "todas-fronteras-fisicos",
        "frontera-programados",
        "todas-fronteras-programados",
      ],
    },
  ]

  export const switchCategory = (category) => {
    switch (category) {
        case "balance":
            return "balance"
        case "generacion":
            return "generation"
        case "intercambios":
            return "exchanges"
        case "mercados":
          return "markets"
        default:
            return category
    }
  }

  export const switchWidget = (widget) => {
    switch (widget) {
        case "balance-electrico":
            return "electrical-balance"
        case "estructura-generacion":
            return "generation-structure"
        case "evolucion-renovable-no-renovable":
            return "renewable-nonrenewable-evolution"
        case "estructura-renovables":
            return "renewables-structure"
        case "estructura-generacion-emisiones-asociadas":
            return "generation-structure-associated-emissions"
        case "no-renovables-detalle-emisiones-CO2":
            return "nonrenewables-CO2-emissions-detail"
        case "maxima-renovable":
            return "maximum-renewable"
        case "potencia-instalada":
            return "installed-capacity"
        case "maxima-renovable-historico":
            return "historical-maximum-renewable"
        case "maxima-sin-emisiones-historico":
            return "historical-maximum-zero-emissions"
        case "francia-frontera":
            return "france-border"
        case "portugal-frontera":
            return "portugal-border"
        case "marruecos-frontera":
            return "morocco-border"
        case "andorra-frontera":
            return "andorra-border"
        case "lineas-marruecos":
            return "morocco-lines"
        case "francia-frontera-programado":
            return "france-border-scheduled"
        case "portugal-frontera-programado":
            return "portugal-border-scheduled"
        case "marruecos-frontera-programado":
            return "morocco-border-scheduled"
        case "andorra-frontera-programado":
            return "andorra-border-scheduled"
        case "enlace-baleares":
            return "balearic-link"
        case "frontera-fisicos":
            return "border-physical"
        case "todas-fronteras-fisicos":
            return "all-borders-physical"
        case "frontera-programados":
            return "border-scheduled"
        case "todas-fronteras-programados":
            return "all-borders-scheduled"
        default:
            return widget
    }
  }
