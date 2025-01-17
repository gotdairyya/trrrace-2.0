import '../styles/index.scss';
import * as d3 from 'd3';

export async function renderCaseStudy(){
    console.log(casestudyOb.split('/'));
    let paragraphs = casestudyOb.split('/');

    d3.select('#main').selectAll('*').remove();
 
    let wrap = d3.select('#main').append('div').classed('case-wrap', true);
    let para = wrap.selectAll('div.paragraph').data(paragraphs).join('div').classed('paragraph', true);
    para.append('text').text(t=> t);

}

export const casestudyOb = `
Anoles, small active lizards native to the Americas and the Caribbean, have become a model system in both ecology and evolution. 
These lizards have been studied intensively over the past 50 years, and serve as a canonical example of an adaptive radiation, where a diverse group of species, 
all occupying a wide range of ecological roles, can evolve. One of the main reasons that anoles are well-known in evolutionary circles is because different lineages of anoles have predictably 
and repeatedly evolved into a particular set of habitat specialist types, called ecomorphs. For example, one ecomorph of anoles, called grass-bush, includes species that are small and short-limbed, 
and prefer to hide on the fine tips of grass stalks and on the narrow branches of bushes. Species from the grass-bush ecomorph, highly specialized to this particular lifestyle, have evolved 
repeatedly across the larger islands in the Caribbean. The anole ecomorphs represent a primary example of convergent evolution, where species, starting from distinct ancestors, evolve the same 
morphology. The complicated mixture of divergence during adaptive radiation and predictable convergence to certain ecomorphs has made anoles a textbook example of macroevolutionary processes./
Untangling the complex interplay of divergence and convergence during adaptive radiation has proven challenging. Most insights come from combining data on species’ traits with information from 
phylogenetic trees, which show the branching patterns of common ancestry and relatedness among species. For example, divergence can be identified when close relatives are more different in their 
traits than one might expect. Likewise, convergence is seen when species have highly different ancestors but share key similarities in the present day. The MultiNet tool provides an ideal 
framework for visualizing patterns of evolution using these data, and for identifying cases of exceptional evolution./
One primary challenge in the early stages of a phylogenetic analysis of trait evolution is detecting outliers. These could represent errors in data entry, in matching species between the tree 
and trait matrix, or simply species that have exceptionally unusual traits. The MultiNet summary view provides an ideal way to detect such outliers. For example, by looking at the summary view 
of snout-vent length (SVL: a measure of body size), we can see that Anolis equestris is exceptionally large. This is in line with our expectations, as A. equestris is a member of the Crown 
Giant ecomorphs, a group of particularly large bodied anoles that also exhibit outlying body size measurements (Figure Summary View)./
Once we have a dataset with species traits and phylogenetic relationships, the MultiNet path view allows visualization of the evolutionary trajectories reconstructed for species from the past to 
the present day. This is critical in understanding how species came to have the traits that they show today. In particular, one can easily visualize and differentiate between species who have 
traits that are inherited unchanging from their deep ancestors (‘conservatism’) from species whose traits have evolved and diverged into their current form. Using A. equestris as an example again, 
the path view reveals that whereas body size (SVL) has steadily increased throughout the species’ evolutionary trajectory, limb length (PC1_limbs) exhibits relative stasis (Figure Path View)./ 
Thus, from the path view we may obtain a clearer understanding of the evolution of body shape through time. 
Finally, the MultiNet pair view provides a powerful and novel way to visualize patterns of convergence and divergence. In particular, this view has a set of tools that quickly isolate and visualize 
the most convergent or divergent pairs of species in a phylogenetic tree. Investigators can then guide their hypotheses, analyses, and future research towards these exceptional pairs. 
For instance, twig anoles have slender bodies, shortened limbs and tails, and widened toe pads, all of which are adaptations to facilitate traversal along narrow twigs at the ends of branches. 
Twig anoles anoles are classic examples of convergent evolution, and the path view demonstrates this clearly; A. insolatus and A. paternus, both twig anoles, diverged in toepad width and tail 
length for much of their evolutionary trajectories, but now exhibit an exceptional degree of convergence (Figure Pair Convergence). In contrast, that path view demonstrates how A. garmani 
(a crown giant), and A. valencienni (a twig anole) have diverged extensively in traits such as body size, toe pad width, and tail length (Fig Pair Divergence)./
`