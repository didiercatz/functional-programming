const {
  data,
  capitalizeFirst
} = require('../src/js/modules/utils')

async function substance() { 

  const json = data
  console.log(data)

  const substancesDirty = json.map(entry => { 
    return entry['favorieteDrug']
  })

  const substancesClean = substancesDirty
    .map(entry => entry.toLowerCase() )
    .filter(entry => { 

      switch (entry) {
      case '':
        return
      case 'drug':
        return
      case 'geen':
        return
      case '-':
        return

      default:
        return entry

      }
    })
    .map(entry => { 

      const split = entry
        .replace(' ', '')
        .split(';')
        .join()
        .split(',')
      
      if (split.length !== 0) {
        console.log(split)
        return split
      } else { 
        return entry
      }
      
    })
    .flat()
    .map(entry => { 
      // Unify all drug names
      const drugs = [
        {
          name: 'Ecstasy',
          matches: ['xtc', 'x', 'ecstacy', 'ectacy'],
        },
        {
          name: 'Marijuana',
          matches: ['wiet', 'wierie'],
        },
      ]

      drugs.map(drug => { 
        console.log(drug.matches.forEach(match => entry.includes('match') && match.name))
      })
      // switch (entry.toLowerCase()) {
      // case 'xtc' || 'x':
      //   return 'Ecstasy'
      //   // case 'Ectacy':
      //   //   return 'Ecstasy'
      //   // case 'xtc':
      //   //   return 'Ectasy'
      //   // case 'x':
      //   //   return 'Ectasy'
      
      // default:
      return entry
      // }
    })
    // Remove all non-drugs
    .filter(entry =>
      entry !== 'Adrenaline' &&
      entry !== 'Muziek'
    )
    .map(entry => capitalizeFirst(entry))
  console.log(substancesClean)
}

substance()