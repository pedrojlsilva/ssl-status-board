const knownLogos = new Map([
    ['a-team', require('@/assets/logos/a-team.png')],
    ['ais', require('@/assets/logos/ais.png')],
    ['ararabots', require('@/assets/logos/ararabots.png')],
    ['blue', require('@/assets/logos/blue.png')],
    ['carrossel-caipira',require('@/assets/logos/carrossel-caipira.png')],
    ['cerberus', require('@/assets/logos/cerberus.png')],
    ['cmμs', require('@/assets/logos/cmμs.png')],
    ['delft-mercurians', require('@/assets/logos/delft-mercurians.png')],
    ['er-force', require('@/assets/logos/er-force.png')],
    ['greentea', require('@/assets/logos/greentea.png')],
    ['immortals', require('@/assets/logos/immortals.png')],
    ['itandroids', require('@/assets/logos/itandroids.png')],
    ['kiks', require('@/assets/logos/kiks.png')],
    ['luhbots', require('@/assets/logos/luhbots.png')],
    ['mct-susano-logics', require('@/assets/logos/mct-susano-logics.png')],
    ['mrl', require('@/assets/logos/mrl.png')],
    ['namec', require('@/assets/logos/namec.png')],
    ['neon', require('@/assets/logos/neon.png')],
    ['neuislanders', require('@/assets/logos/neuislanders.png')],
    ['op-amp', require('@/assets/logos/op-amp.png')],
    ['orcabot', require('@/assets/logos/orca-bot.png')],
    ['pequi-mecanico', require('@/assets/logos/pequi-mecanico.png')],
    ['red-dragons', require('@/assets/logos/red-dragons.png')],
    ['ri-one', require('@/assets/logos/rione.png')],
    ['robôcin-a', require('@/assets/logos/robocin.png')],
    ['robôcin-b', require('@/assets/logos/robocin.png')],
    ['robodragons', require('@/assets/logos/robodragons.png')],
    ['robofei', require('@/assets/logos/robofei.png')],
    ['roboime', require('@/assets/logos/roboime.png')],
    ['robojackets', require('@/assets/logos/robojackets.png')],
    ['roboteam-twente', require('@/assets/logos/roboteam-twente.png')],
    ['spbunited', require('@/assets/logos/spbunited.png')],
    ['src', require('@/assets/logos/src.png')],
    ['taurabots', require('@/assets/logos/taurabots.png')],
    ['tigers-mannheim', require('@/assets/logos/tigers-mannheim.png')],
    ['turtlerabbit', require('@/assets/logos/turtlerabbit.png')],
    ['titans', require('@/assets/logos/titans.png')],
    ['ubc-thunderbots', require('@/assets/logos/ubc-thunderbots.png')],
    ['unball', require('@/assets/logos/unball.png')],
    ['ultron', require('@/assets/logos/ultron.png')],
    ['umass-minutebots', require('@/assets/logos/umass-minutebots.png')],
    ['warthog-robotics-a', require('@/assets/logos/warthog-robotics-a.png')],
    ['warthog-robotics-b', require('@/assets/logos/warthog-robotics-b.png')],
    ['uroborus', require('@/assets/logos/uroborus.png')],
    ['yellow', require('@/assets/logos/yellow.png')],
    ['zjunlict', require('@/assets/logos/zjunlict.png')],
]);

import defaultLogo from '@/assets/logos/no-logo.png';

const teamLogoUrl = function (teamName) {
    const logoBaseName = teamName.toLowerCase().replace(' ', '-');
    const logoPath = knownLogos.get(logoBaseName);
    if (logoPath !== undefined) {
        return logoPath;
    }
    return defaultLogo;
};

export default teamLogoUrl;
