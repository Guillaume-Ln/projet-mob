/* eslint-disable max-len */
import './style.scss';
import deletIcone from 'src/assets/icon/deletIcon.png';
import { useDispatch } from 'react-redux';
import { actionTermsOfUseModale } from '../../actions';

function TermsOfUse() {
  const dispatch = useDispatch();
  const handleCloseTermsOfUse = () => {
    dispatch(actionTermsOfUseModale());
  };
  return (
    <article className="modaleTermsOfUse">
      <img onClick={handleCloseTermsOfUse} className="modaleTermsOfUse-deletIcon" src={deletIcone} alt="close" />
      <h3 className="modaleTermsOfUse-title">POLITIQUE DE CONFIDENTIALITÉ</h3>
      <section className="modaleTermsOfUse-description">
        <h4>1. Généralités</h4>

        <div>
          MOB (dont le siège social est situé au 21 rue véron 75018 Paris France),
          en sa qualité de responsable du traitement, attache une grande importance à la protection et au respect de votre vie privée.
          La présente politique vise à vous informer de nos pratiques concernant la collecte,
          l’utilisation et le partage des informations que vous êtes amenés à nous fournir par le biais de notre plateforme accessible depuis le site internet http://www.mob.gg.
        </div>
        <div>
          Cette politique présente la manière dont nous traitons les données personnelles que nous recueillons et que vous nous fournissez. Nous vous invitons à lire attentivement le présent  document pour connaître et comprendre nos pratiques quant aux traitements de vos données personnelles que nous mettons en œuvre.
        </div>
        <div>
          1. Les informations que nous recueillons
        </div>
        <div>
          Nous sommes susceptibles de recueillir et de traiter les données suivantes :
        </div>
        <div>
          2.1. Les informations que vous nous transmettez directement
        </div>
        <div>
          En utilisant notre Plateformes, vous êtes amenés à nous transmettre des informations, dont certaines sont de nature à vous identifier (« Données Personnelles »). C’est notamment le cas lorsque vous remplissez des formulaires (comme par exemple le formulaire de création de compte), études ou sondages, lorsque vous nous contactez – que ce soit par téléphone, email ou tout autre moyen de communication – ou lorsque vous nous faites part d’un problème.

          Ces informations contiennent notamment les données suivantes :
        </div>
        <div>
          2.1.1. Les données nécessaires à l’inscription au service que nous fournissons sur notre Plateforme ou à l’accès à tout autre service fournis par nous. Ces données sont notamment vos nom et prénom, adresse e-mail,. Ces informations sont obligatoires. A défaut Mob ne sera pas en mesure de vous fournir les services proposés par notre Plateforme.
        </div>

        <div>
          2.1.2. Une photographie ou image de profil ;
        </div>
        <div>
          2.1.3. Le détail de vos visites sur notre Plateforme et des contenus auxquels vous avez accédé ;
        </div>
        <div>
          2.1.4. Le cas échéant, vos réponses à nos sondages et questionnaires et les avis que vous avez laissés pour nos services, ces informations étant notamment susceptibles d’être utilisées dans le cadre de recherches et d’analyses du comportement utilisateur ;
        </div>
        <div>
          2.1.5. Les données que nous pouvons vous demander de fournir lorsque vous nous signalez un problème relatif à notre Plateforme ou à nos services, comme par exemple l’objet d’une demande d’assistance ;
        </div>
        <div>
          2.2. Les données que nous recueillons automatiquement
        </div>
        <div>
          2.2.1. Lors de chacune de vos visites, nous sommes susceptibles de recueillir, conformément à la législation applicable et avec votre accord, le cas échéant, des informations relatives aux appareils sur lesquels vous utilisez nos services ou aux réseaux depuis lesquels vous accédez à nos services, types et versions de navigateurs internet utilisés, types et versions des plugins de votre navigateur, systèmes et plateformes d’exploitation, données concernant votre parcours de navigation sur notre Plateforme, notamment votre parcours sur les différentes pages URL de notre Plateforme, le contenu auquel vous accédez ou que vous consultez, les termes de recherches utilisés, les erreurs de téléchargement, la durée de consultation de certaines pages, les interactions avec la page ainsi que tout numéro du téléphone utilisé pour nous contacter.
        </div>
        <div>2.2.2. Nous recueillons également des informations sur votre utilisation de notre Plateforme telles que le nombre de tournois créés, votre taux de réponse aux messages, etc.</div>

        <div>2.3. Durée de conservation de vos données</div>

        <div>2.3.1. A l’exception des catégories de Données Personnelles visées à l’articles 2.3.2. ci-dessous, vos Données Personnelles sont archivées à l’issue des périodes suivantes:</div>
        <div>2 ans après votre dernière utilisation de notre Plateforme ;</div>

        <div>2.3.2. Les catégories de Données Personnelles suivantes sont susceptibles d’être conservées pour des durées différentes :</div>

        <div>Les données financières (par exemple les paiements, remboursements, etc.) sont conservées pour la durée requise par les lois applicables en matière fiscale et comptable ;</div>

        <div>Les contenus créés par vous sur notre Plateforme (tels que les commentaires, avis et notation et actus) sont rendus anonymes passés les délais mentionnés au 2.3.1 mais demeurent visibles sur notre Plateforme.</div>

        1. Comment utilisons-nous les données que nous recueillons ?

        3.1. Dans le cadre de l’utilisation de nos services, certaines de vos informations sont transmises à nos prestataires autorisés à utiliser les données sur notre plateforme. par l’intermédiaire de votre profil public ou dans le cadre du processus de connection (par exemple nous communiquons votre login a discord ).

        <h4>Outils utilisé FONDEMENT LEGAL</h4>

        <div>3.1.1 heroku: plateforme d'hébergement web</div>

        <div>3.1.2 discord: plateforme de communications qui vous permettra de vous connecter à notre plateforme.</div>

        <div>3.2.1. Dans l’hypothèse où nous vendrions ou acquérons une entreprise ou des actifs, auquel cas nous nous réservons la possibilité de partager vos Données Personnelles avec le potentiel vendeur ou acheteur de cette entreprise ou de ces actifs.</div>

        <div>3.2.2. Si Mob ou tout ou partie de ses actifs sont rachetés par un tiers, les données en notre possession seront, le cas échéant, transférées au nouveau propriétaire.</div>

        <div>3.2.3. Conformément à la législation applicable et avec votre consentement lorsqu’il est requis, nous pouvons agréger des données qui vous concernent et que nous recevons ou envoyons à nos partenaires commerciaux. Ces informations agrégées ne seront utilisées que pour les finalités décrites ci-dessus.</div>

        <div>3.2.7. Nous attirons votre attention sur le fait que si vous décidez de nous laisser accéder à certaines de vos informations, notamment à vos Données Personnelles, par l’intermédiaire de services de connexion mis à disposition par nos partenaires commerciaux, leurs politiques de confidentialité vous est également opposable. Nous n’avons aucun contrôle sur la collecte ou le traitement de vos données mis en œuvre par nos partenaires commerciaux sur leur propre plateforme.</div>

        <div>1. Vos données sont-elles transférées, comment et où ?</div>
        <div>
          En règle générale, nous conservons vos Données Personnelles au sein de l’Union Européenne. Cependant, dans la mesure où, par exemple, certains de nos prestataires de service sont situés dans des pays en dehors de l’Union Européenne (« Pays Tiers »), nous transférons certaines de vos Données Personnelles dans des Pays Tiers. Cela peut notamment être le cas vers des Pays Tiers pour lesquels la Commission Européenne n’a pas pris une décision de « protection adéquate ». Dans un tel cas, nous nous assurons de ce transfert soit effectué en conformité avec la réglementation applicable et garantisse un niveau de protection un niveau de protection suffisant de la vie privée et des droits fondamentaux des personnes (notamment par les clauses contractuelles types de la Commission Européenne).

          Sur simple demande formulée à notre Délégué à la Protection des Données (mkarmensky@gmail.com) nous pouvons vous fournir davantage d’informations quant à ces transferts (notamment les clauses contractuelles types de la Commission Européenne).
        </div>
        <div>
          1. Quels sont vos droits sur vos données perosnnolles ?
        </div>
        <div>5.1. Vous disposez du droit de recevoir une copie de vos Données Personnelles en notre possession (« droit d’accès »).</div>

        <div>5.2. Vous pouvez également demander l’effacement de vos Données Personnelles ainsi que la rectification des Données Personnelles erronées ou obsolètes (« droit d’effacement et droit de rectification »). Veuillez noter que nous sommes susceptibles de conserver certaines informations vous concernant lorsque la loi nous l’impose ou lorsque nous avons un motif légitime de le faire. C’est par exemple le cas, si nous estimons que vous avez commis une fraude ou violé nos Conditions Générales d’Utilisation et que nous souhaitons éviter que vous contourniez les règles applicables à notre communauté.</div>

        <div>5.3. Vous disposez également du droit de vous opposer à tout moment pour des raisons tenant à sa situation particulière, (i) au traitement de vos Données Personnes à des fins de marketing direct ou aux traitements effectués sur le fondement de notre intérêt légitime (« droit d’opposition »).</div>

        <div>5.4. Vous disposez du droit de limiter les traitements effectués sur vos Données Personnelles (« droit à la limitation »). Veuillez noter que ce droit ne s’applique que si (i) vous contestez l’exactitude de vos Données Personnelles pendant la durée nous permettant de vérifier l’exactitude de ces dernières; (ii) en cas de traitement illicite de notre part et si vous exigez une limitation de leur utilisation plutôt qu’un effacement, (iii) nous n’avons plus besoin des données à caractère personnel aux fins du traitement mais celles-ci vous sont encore nécessaires pour la constatation, l’exercice ou la défense de droits en justice; iv) en cas d’exercice de votre droit d’opposition pendant la durée de vérification portant sur le point de savoir si les motifs légitimes que nous poursuivons prévalent les votre.</div>

        <div>5.5. Vous disposez du droit d’introduire une réclamation auprès de l’autorité de contrôle compétente ou d’obtenir réparation auprès des tribunaux compétents si vous considérez que nous n’avons pas respecté vos droits.</div>

        <div>5.6. Vous disposez également du droit à la portabilité de vos données, c’est-à-dire au droit de recevoir les Données Personnelles que vous nous avez fournis dans un format structuré, couramment utilisé et lisible par la machine et le droit de transmettre ces données à un autre responsable du traitement (« droit à la portabilité »).</div>

        <div>5.7. Vous disposez également du droit de définir des directives relatives au sort de vos Données Personnelles après votre mort.</div>

        <div>5.8. Pour exercer ces droits, vous pouvez contacter notre Délégué à la Protection des Données Personnelles selon les modalités définies à l’article 11 ci-dessous.</div>

        <div>1. Liens vers d’autres sites internet et réseaux sociaux</div>
        <div>Nos Plateformes peuvent occasionnellement contenir des liens vers les sites internet de nos partenaires ou de sociétés tierces. Veuillez noter que ces sites internet ont leur propre politique de confidentialité et que nous déclinons toute responsabilité quant à l’utilisation faite par ces sites des informations collectées lorsque vous cliquez sur ces liens. Nous vous invitons à prendre connaissance de politiques de confidentialité de ces sites avant de leur transmettre vos Données Personnelles.</div>

        <div>1. Modification de notre politique de confidentialité</div>
        <div>Nous pouvons être amené à modifier occasionnellement la présente politique de confidentialité. Lorsque cela est nécessaire, nous vous en informerons et/ou solliciterons votre accord. Nous vous conseillons de consulter régulièrement cette page pour prendre connaissance des éventuelles modifications ou mises à jour apportées à notre politique de confidentialité.</div>

        <div>1. Contact</div>
        <div>Pour toute question relative à la présente politique de confidentialité ou pour toute demande relative à vos données personnelles, vous pouvez nous contacter en :</div>

        <div>adressant un email à notre délégué à la protection des données à l’adresse mkarmensky@gmail.com</div>

        <div>ou en nous adressant un courrier à l’adresse suivante : Matthieu karmensky : MOB</div>

        <div>21 rue véron 75018</div>

        <div>Version mise à jour le 20/09/2022</div>
      </section>
    </article>
  );
}

export default TermsOfUse;
