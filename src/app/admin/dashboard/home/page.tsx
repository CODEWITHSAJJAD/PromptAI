/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
'use client';

import { useAdmin } from '@/app/admin/context/AdminContext';
import { Container } from '@/components/ui/Container';
import { EditableText } from '@/components/editable/EditableText';
import { Plus, Trash2 } from 'lucide-react';

interface HeroData { tagline?: string; title?: string; subtitle?: string; }
interface PromiseData { title?: string; content?: string; }
interface WhyItem { title: string; description: string; }
interface WhyDifferentData { title?: string; items: WhyItem[]; }
interface ClientsData { title?: string; logos: string[]; }
interface CredDeckData { title?: string; description?: string; }
interface AdoptingAIData { title?: string; subtitle?: string; description?: string; }
interface FeatureItem { title: string; desc: string; }
interface BuildingCapabilityData { title?: string; subtitle?: string; description?: string; features: FeatureItem[]; }
interface PillarsData { missionQuote?: string; approachTitle?: string; approachHeading?: string; approachDesc?: string; whyTitle?: string; whyHeading?: string; whyDesc?: string; }
interface GetInTouchData { title?: string; subtitle?: string; }

export default function HomeEditor() {
  const { content, updateContent } = useAdmin();
  
  if (!content?.home) return <div className="text-white">Loading content...</div>;

  const homeContent = content.home as Record<string, unknown>;
  const hero = (homeContent.hero || {}) as HeroData;
  const promise = (homeContent.promise || {}) as PromiseData;
  const whyDifferent = (homeContent.whyDifferent || { items: [] }) as WhyDifferentData;
  
  const clients = (homeContent.clients || { logos: [] }) as ClientsData;
  const credDeck = (homeContent.credDeck || {}) as CredDeckData;
  const adoptingAI = (homeContent.adoptingAI || {}) as AdoptingAIData;
  const buildingCapability = (homeContent.buildingCapability || { features: [] }) as BuildingCapabilityData;
  const pillars = (homeContent.pillars || {}) as PillarsData;
  const getInTouch = (homeContent.getInTouch || {}) as GetInTouchData;

  const updateSection = (section: string, field: string, value: any) => {
    const currentSection = (homeContent[section] || {}) as Record<string, unknown>;
    updateContent('home', { ...homeContent, [section]: { ...currentSection, [field]: value } });
  };

  const updateWhyDifferentItem = (index: number, field: string, value: string) => {
    const items = [...whyDifferent.items];
    items[index] = { ...items[index], [field]: value };
    updateContent('home', { ...homeContent, whyDifferent: { ...whyDifferent, items } });
  };
  const addWhyItem = () => {
    const newItem = { title: "New Feature", description: "Description here..." };
    updateContent('home', { ...homeContent, whyDifferent: { ...whyDifferent, items: [...whyDifferent.items, newItem] } });
  };
  const deleteWhyItem = (index: number) => {
    const items = whyDifferent.items.filter((_, i) => i !== index);
    updateContent('home', { ...homeContent, whyDifferent: { ...whyDifferent, items } });
  };

  // Logos CRUD
  const updateLogo = (index: number, value: string) => {
    const logos = [...(clients.logos || [])];
    logos[index] = value;
    updateSection('clients', 'logos', logos);
  };
  const addLogo = () => {
    const logos = [...(clients.logos || []), "New Client"];
    updateSection('clients', 'logos', logos);
  };
  const deleteLogo = (index: number) => {
    const logos = (clients.logos || []).filter((_, i) => i !== index);
    updateSection('clients', 'logos', logos);
  };

  // Building Capability Features CRUD
  const updateFeature = (index: number, field: string, value: string) => {
    const features = [...(buildingCapability.features || [])];
    features[index] = { ...features[index], [field]: value };
    updateSection('buildingCapability', 'features', features);
  };
  const addFeature = () => {
    const features = [...(buildingCapability.features || []), { title: "New Feature", desc: "Description" }];
    updateSection('buildingCapability', 'features', features);
  };
  const deleteFeature = (index: number) => {
    const features = (buildingCapability.features || []).filter((_, i) => i !== index);
    updateSection('buildingCapability', 'features', features);
  };

  return (
    <Container>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Home Page Editor</h1>
        <p className="text-white/60">Click on any text to edit it.</p>
      </div>

      <div className="space-y-8 pb-32">
        {/* Existing Sections logic (Hero, Promise, WhyDifferent) */}
        <section className="bg-[#262424] rounded-xl p-6 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">Hero Section</h2>
          <div className="space-y-4">
            <div><label className="block text-sm text-white/60 mb-1">Tagline</label><EditableText value={hero.tagline || ''} onChange={(v) => updateSection('hero', 'tagline', v)} className="text-[#FF3500] text-sm font-black uppercase tracking-[0.3em] font-mono" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Title</label><EditableText value={hero.title || ''} onChange={(v) => updateSection('hero', 'title', v)} className="text-5xl md:text-7xl font-black text-white leading-[0.85] tracking-tighter" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Subtitle</label><EditableText value={hero.subtitle || ''} onChange={(v) => updateSection('hero', 'subtitle', v)} className="text-xl font-bold text-white leading-tight" /></div>
          </div>
        </section>

        <section className="bg-[#262424] rounded-xl p-6 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">Our Promise Section</h2>
          <div className="space-y-4">
            <div><label className="block text-sm text-white/60 mb-1">Title</label><EditableText value={promise.title || ''} onChange={(v) => updateSection('promise', 'title', v)} className="text-3xl font-bold text-white" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Content</label><EditableText value={promise.content || ''} onChange={(v) => updateSection('promise', 'content', v)} className="text-white/80" /></div>
          </div>
        </section>

        <section className="bg-[#262424] rounded-xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Why We're Different</h2>
            <button onClick={addWhyItem} className="flex items-center gap-2 px-3 py-1.5 bg-[#FF3500] text-white rounded-lg hover:bg-[#FF3500]/90 text-sm"><Plus size={16} /> Add</button>
          </div>
          <div className="space-y-4">
            <div><label className="block text-sm text-white/60 mb-1">Section Title</label><EditableText value={whyDifferent.title || ''} onChange={(v) => updateContent('home', { ...homeContent, whyDifferent: { ...whyDifferent, title: v } })} className="text-3xl font-bold text-white" /></div>
            {whyDifferent.items.map((item, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-sm font-bold text-white">Item {index + 1}</h3>
                  <button onClick={() => deleteWhyItem(index)} className="text-red-400 hover:text-red-300"><Trash2 size={16} /></button>
                </div>
                <div className="space-y-2">
                  <div><label className="block text-xs text-white/60">Title</label><EditableText value={item.title} onChange={(v) => updateWhyDifferentItem(index, 'title', v)} className="text-white font-bold" /></div>
                  <div><label className="block text-xs text-white/60">Description</label><EditableText value={item.description} onChange={(v) => updateWhyDifferentItem(index, 'description', v)} className="text-white/70" /></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* New Sections */}
        <section className="bg-[#262424] rounded-xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Clients (Trusted By)</h2>
            <button onClick={addLogo} className="flex items-center gap-2 px-3 py-1.5 bg-[#FF3500] text-white rounded-lg hover:bg-[#FF3500]/90 text-sm"><Plus size={16} /> Add Logo</button>
          </div>
          <div className="space-y-4">
            <div><label className="block text-sm text-white/60 mb-1">Title</label><EditableText value={clients.title || ''} onChange={(v) => updateSection('clients', 'title', v)} className="text-xl font-bold text-white" /></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {(clients.logos || []).map((logo, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-3 flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-white/40">Logo {index + 1}</span>
                    <button onClick={() => deleteLogo(index)} className="text-red-400 hover:text-red-300"><Trash2 size={14} /></button>
                  </div>
                  <EditableText value={logo} onChange={(v) => updateLogo(index, v)} className="text-white font-bold" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#262424] rounded-xl p-6 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">Cred Deck</h2>
          <div className="space-y-4">
            <div><label className="block text-sm text-white/60 mb-1">Title</label><EditableText value={credDeck.title || ''} onChange={(v) => updateSection('credDeck', 'title', v)} className="text-2xl font-bold text-white" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Description</label><EditableText value={credDeck.description || ''} onChange={(v) => updateSection('credDeck', 'description', v)} className="text-white/80" /></div>
          </div>
        </section>

        <section className="bg-[#262424] rounded-xl p-6 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">Adopting AI Tools</h2>
          <div className="space-y-4">
            <div><label className="block text-sm text-white/60 mb-1">Title</label><EditableText value={adoptingAI.title || ''} onChange={(v) => updateSection('adoptingAI', 'title', v)} className="text-2xl font-bold text-white" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Subtitle</label><EditableText value={adoptingAI.subtitle || ''} onChange={(v) => updateSection('adoptingAI', 'subtitle', v)} className="text-white/80 font-bold text-lg" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Description</label><EditableText value={adoptingAI.description || ''} onChange={(v) => updateSection('adoptingAI', 'description', v)} className="text-white/70" /></div>
          </div>
        </section>

        <section className="bg-[#262424] rounded-xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Building Capability</h2>
            <button onClick={addFeature} className="flex items-center gap-2 px-3 py-1.5 bg-[#FF3500] text-white rounded-lg hover:bg-[#FF3500]/90 text-sm"><Plus size={16} /> Add Feature</button>
          </div>
          <div className="space-y-4">
            <div><label className="block text-sm text-white/60 mb-1">Title</label><EditableText value={buildingCapability.title || ''} onChange={(v) => updateSection('buildingCapability', 'title', v)} className="text-2xl font-bold text-white" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Subtitle</label><EditableText value={buildingCapability.subtitle || ''} onChange={(v) => updateSection('buildingCapability', 'subtitle', v)} className="text-white/80 font-bold text-lg" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Description</label><EditableText value={buildingCapability.description || ''} onChange={(v) => updateSection('buildingCapability', 'description', v)} className="text-white/70" /></div>
            <div className="space-y-3 mt-4">
              <label className="block text-sm text-white/60">Features ({buildingCapability.features?.length || 0})</label>
              {(buildingCapability.features || []).map((feat, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-sm font-bold text-white">Feature {index + 1}</h3>
                    <button onClick={() => deleteFeature(index)} className="text-red-400 hover:text-red-300"><Trash2 size={16} /></button>
                  </div>
                  <div className="space-y-2">
                    <div><label className="block text-xs text-white/60">Title</label><EditableText value={feat.title} onChange={(v) => updateFeature(index, 'title', v)} className="text-white font-bold" /></div>
                    <div><label className="block text-xs text-white/60">Description</label><EditableText value={feat.desc} onChange={(v) => updateFeature(index, 'desc', v)} className="text-white/70" /></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#262424] rounded-xl p-6 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">Pillars (Mission, Approach, Why)</h2>
          <div className="space-y-4">
            <div><label className="block text-sm text-white/60 mb-1">Mission Quote</label><EditableText value={pillars.missionQuote || ''} onChange={(v) => updateSection('pillars', 'missionQuote', v)} className="text-xl font-bold text-white" /></div>
            <div className="pt-4 border-t border-white/10"><label className="block text-sm text-white/60 mb-1">Approach Title</label><EditableText value={pillars.approachTitle || ''} onChange={(v) => updateSection('pillars', 'approachTitle', v)} className="text-[#FF3500] text-sm font-black uppercase tracking-[0.3em]" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Approach Heading</label><EditableText value={pillars.approachHeading || ''} onChange={(v) => updateSection('pillars', 'approachHeading', v)} className="text-xl font-bold text-white" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Approach Description</label><EditableText value={pillars.approachDesc || ''} onChange={(v) => updateSection('pillars', 'approachDesc', v)} className="text-white/70" /></div>
            
            <div className="pt-4 border-t border-white/10"><label className="block text-sm text-white/60 mb-1">Why Title</label><EditableText value={pillars.whyTitle || ''} onChange={(v) => updateSection('pillars', 'whyTitle', v)} className="text-[#FF3500] text-sm font-black uppercase tracking-[0.3em]" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Why Heading</label><EditableText value={pillars.whyHeading || ''} onChange={(v) => updateSection('pillars', 'whyHeading', v)} className="text-xl font-bold text-white" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Why Description</label><EditableText value={pillars.whyDesc || ''} onChange={(v) => updateSection('pillars', 'whyDesc', v)} className="text-white/70" /></div>
          </div>
        </section>

        <section className="bg-[#262424] rounded-xl p-6 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">Get In Touch Section</h2>
          <div className="space-y-4">
            <div><label className="block text-sm text-white/60 mb-1">Title</label><EditableText value={getInTouch.title || ''} onChange={(v) => updateSection('getInTouch', 'title', v)} className="text-4xl font-bold text-white" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Subtitle</label><EditableText value={getInTouch.subtitle || ''} onChange={(v) => updateSection('getInTouch', 'subtitle', v)} className="text-white/70" /></div>
          </div>
        </section>
      </div>
    </Container>
  );
}
