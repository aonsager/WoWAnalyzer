import React from 'react';

import SuggestionsTab from 'Main/SuggestionsTab';
import Tab from 'Main/Tab';
import Talents from 'Main/Talents';

import CoreCombatLogParser from 'Parser/Core/CombatLogParser';

import CastEfficiency from './Modules/Features/CastEfficiency';
import AlwaysBeCasting from './Modules/Features/AlwaysBeCasting';
import CooldownTracker from './Modules/Features/CooldownTracker';
import DamageDone from './Modules/PaladinCore/DamageDone';

import DivinePurpose from './Modules/Talents/DivinePurpose';

import HolyPowerTracker from './Modules/HolyPower/HolyPowerTracker';
import HolyPowerDetails from './Modules/HolyPower/HolyPowerDetails';

import WhisperOfTheNathrezim from './Modules/Items/WhisperOfTheNathrezim';
import LiadrinsFuryUnleashed from './Modules/Items/LiadrinsFuryUnleashed';
import SoulOfTheHighlord from './Modules/Items/SoulOfTheHighlord';
import AshesToDust from './Modules/Items/AshesToDust';
import Tier20_2set from './Modules/Items/Tier20_2set';
import Tier20_4set from './Modules/Items/Tier20_4set';

class CombatLogParser extends CoreCombatLogParser {
  static specModules = {
    // Override the ability tracker so we also get stats for IoL and beacon healing

    // PaladinCore
    damageDone: DamageDone,

    // Features
    castEfficiency: CastEfficiency,
    alwaysBeCasting: AlwaysBeCasting,
    cooldownTracker: CooldownTracker,

    // Talents
    divinePurpose: DivinePurpose,

    // HolyPower
    holyPowerTracker: HolyPowerTracker,
    holyPowerDetails: HolyPowerDetails,

    // Traits

    // Items:
    whisperOfTheNathrezim: WhisperOfTheNathrezim,
    liadrinsFuryUnleahed: LiadrinsFuryUnleashed,
    soulOfTheHighlord: SoulOfTheHighlord,
    ashesToDust: AshesToDust,
    tier20_2set: Tier20_2set,
    tier20_4set: Tier20_4set,
  };

  generateResults() {
    const results = super.generateResults();

    results.tabs = [
      {
        title: 'Suggestions',
        url: 'suggestions',
        render: () => (
          <SuggestionsTab issues={results.issues} />
        ),
      },
      {
        title: 'Talents',
        url: 'talents',
        render: () => (
          <Tab title="Talents">
            <Talents combatant={this.modules.combatants.selected} />
          </Tab>
        ),
      },
      ...results.tabs,
    ];

    return results;
  }
}

export default CombatLogParser;
