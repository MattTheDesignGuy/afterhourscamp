import { Button } from '../components/Button';
import { Check, X, Shirt, Backpack } from 'lucide-react';
import { motion } from 'motion/react';

export function PackingList() {
  const clothes = [
    'Themed party costumes',
    'Dress for mimosas',
    'Bathing suit',
    'Warm clothes for the evening',
    'Comfy clothes',
    'Something white you can tye-dye',
  ];

  const essentials = [
    'Towel',
    'Sunglasses',
    'Sunscreen',
    'Closed-toed shoes for activities',
    'Water bottle',
    'Thongs',
    'Basic toiletries',
    'Doona',
    'Pillow',
    'Single sheet',
    'Home comforts',
    'Proof of ID',
    'Good attitude',
  ];

  const dontBring = [
    "Anyone who can't make safe choices",
    "Anyone who isn't fun",
    'Drugs',
    'Your own drinks',
    'Glass of any kind',
    'Peanuts — campsite is a no nut venue',
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#FBB040] via-[#EA0A8C] to-[#050B2F] py-32 px-4 overflow-hidden">
        {/* Animated Stars */}
        <div className="absolute inset-0 opacity-60">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out ${Math.random() * 3}s infinite`,
                boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)',
              }}
            />
          ))}
          <style>{`
            @keyframes twinkle {
              0%, 100% { opacity: 0.2; transform: scale(0.8); }
              50% { opacity: 1; transform: scale(1.2); }
            }
          `}</style>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl text-white mb-6 drop-shadow-lg"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Packing List
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl text-white mb-4 drop-shadow"
          >
            Get fun!
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-5 text-lg text-[#1C325A] leading-relaxed">
          <p>
            An Afterhours weekend is all about having fun, living carefree and not taking yourself too seriously. As adults we don't do that enough.
          </p>
          <p>
            It's an adult school camp, so we love to see pj's at breakfast, tye-dye in the afternoon and amazing themed costumes in the evening. There's no such thing as too wacky!
          </p>
          <p>
            Below are our recommendations for what to bring to one of our weekends.
          </p>
        </div>
      </section>

      {/* Clothes + Essentials */}
      <section className="bg-white pb-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Clothes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#EEEEEF] rounded-2xl p-8 shadow-md"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-[#FBB040] to-[#EA0A8C] p-3 rounded-lg flex-shrink-0">
                <Shirt className="text-white" size={28} />
              </div>
              <h2
                className="text-3xl md:text-4xl bg-gradient-to-r from-[#FBB040] to-[#EA0A8C] bg-clip-text text-transparent"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Clothes
              </h2>
            </div>
            <ul className="space-y-3">
              {clothes.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-[#FBB040] to-[#EA0A8C] flex items-center justify-center mt-1">
                    <Check className="text-white" size={12} />
                  </div>
                  <span className="text-[#1C325A]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Essentials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-[#EEEEEF] rounded-2xl p-8 shadow-md"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-[#FBB040] to-[#EA0A8C] p-3 rounded-lg flex-shrink-0">
                <Backpack className="text-white" size={28} />
              </div>
              <h2
                className="text-3xl md:text-4xl bg-gradient-to-r from-[#FBB040] to-[#EA0A8C] bg-clip-text text-transparent"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Essentials
              </h2>
            </div>
            <ul className="space-y-3">
              {essentials.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-[#FBB040] to-[#EA0A8C] flex items-center justify-center mt-1">
                    <Check className="text-white" size={12} />
                  </div>
                  <span className="text-[#1C325A]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* What NOT to Bring */}
      <section className="bg-[#050B2F] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#EA0A8C] p-3 rounded-lg flex-shrink-0">
                <X className="text-white" size={28} />
              </div>
              <h2
                className="text-3xl md:text-4xl text-[#1C325A]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                What NOT to Bring
              </h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {dontBring.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#EA0A8C] flex items-center justify-center mt-1">
                    <X className="text-white" size={12} />
                  </div>
                  <span className="text-[#1C325A]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-gradient-to-b from-[#050B2F] via-[#EA0A8C] to-[#FBB040] py-20 px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2
            className="text-4xl md:text-5xl text-white mb-6 drop-shadow-lg"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Haven't grabbed a ticket yet?
          </h2>
          <p className="text-xl text-white mb-10 drop-shadow">
            Lock in your spot, then start planning your costume.
          </p>
          <Button to="/tickets" variant="secondary">
            Get Tickets
          </Button>
        </div>
      </section>
    </div>
  );
}
