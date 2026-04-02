'use client';

import { useAdmin } from '@/app/admin/context/AdminContext';
import { Container } from '@/components/ui/Container';
import { EditableText, EditableInput } from '@/components/editable/EditableText';

interface HeroData {
  tagline?: string;
  title?: string;
  subtitle?: string;
  description1?: string;
  description2?: string;
  email?: string;
  phone?: string;
  address?: string;
}

interface FooterData {
  email?: string;
  phone?: string;
  address?: string;

}

export default function ContactEditor() {
  const { content, updateContent } = useAdmin();

  if (!content?.contact) {
    return <div className="text-white">Loading content...</div>;
  }

  const contactContent = content.contact as Record<string, unknown>;
  const hero = (contactContent.hero || {}) as HeroData;
  const footer = (contactContent.footer || {}) as FooterData;

  const updateHero = (field: string, value: string) => {
    updateContent('contact', { ...contactContent, hero: { ...hero, [field]: value } });
  };

  const updateFooter = (field: string, value: string) => {
    updateContent('contact', { ...contactContent, footer: { ...footer, [field]: value } });
  };

  return (
    <Container>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Contact Page Editor</h1>
        <p className="text-white/60">Click on any text to edit it. Footer changes will reflect across the site.</p>
      </div>

      <div className="space-y-8">
        {/* Hero Section */}
        <section className="bg-[#262424] rounded-xl p-6 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-white/60 mb-1">Tagline</label>
              <EditableText
                value={hero.tagline || ''}
                onChange={(v) => updateHero('tagline', v)}
                tagName="p"
                className="text-white text-sm font-black uppercase tracking-[0.3em] font-mono"
              />
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-1">Title</label>
              <EditableText
                value={hero.title || ''}
                onChange={(v) => updateHero('title', v)}
                tagName="h1"
                className="text-5xl md:text-7xl font-black text-white leading-[0.85] tracking-tighter"
              />
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-1">Subtitle</label>
              <EditableText
                value={hero.subtitle || ''}
                onChange={(v) => updateHero('subtitle', v)}
                tagName="p"
                className="text-xl font-bold text-white leading-tight"
              />
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-1">Description Paragraph 1</label>
              <EditableText
                value={hero.description1 || ''}
                onChange={(v) => updateHero('description1', v)}
                tagName="p"
                className="text-lg text-white font-medium leading-relaxed"
              />
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-1">Description Paragraph 2</label>
              <EditableText
                value={hero.description2 || ''}
                onChange={(v) => updateHero('description2', v)}
                tagName="p"
                className="text-lg text-white font-medium leading-relaxed"
              />
            </div>

            <div className="border-t border-white/10 pt-6 mt-6">
              <h3 className="text-lg font-bold text-white mb-4">Contact Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-white/60 mb-1">Email</label>
                  <EditableInput
                    value={hero.email || ''}
                    onChange={(v) => updateHero('email', v)}
                    type="email"
                    className="text-white font-bold"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-1">Phone</label>
                  <EditableInput
                    value={hero.phone || ''}
                    onChange={(v) => updateHero('phone', v)}
                    type="tel"
                    className="text-white font-bold"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-1">Address</label>
                  <EditableText
                    value={hero.address || ''}
                    onChange={(v) => updateHero('address', v)}
                    className="text-white font-bold"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <section className="bg-[#262424] rounded-xl p-6 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">Footer Information (Appears on all pages)</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-white/60 mb-1">Email</label>
              <EditableInput
                value={footer.email || ''}
                onChange={(v) => updateFooter('email', v)}
                type="email"
                className="text-white font-bold"
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-1">Phone</label>
              <EditableInput
                value={footer.phone || ''}
                onChange={(v) => updateFooter('phone', v)}
                type="tel"
                className="text-white font-bold"
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-1">Address</label>
              <EditableText
                value={footer.address || ''}
                onChange={(v) => updateFooter('address', v)}
                className="text-white font-bold"
              />
            </div>

          </div>
        </section>
      </div>
    </Container>
  );
}
