import { UserProfileHttpService, resolveService } from 'audako-core-components';

const TEMPLATES_SETTING_KEY = 'copilot.templates';

const LABEL_REGEX = /^[A-Za-z0-9_-]+$/;

interface StoredTemplate {
  description: string;
  content: string;
}

type StoredTemplates = Record<string, StoredTemplate>;

export interface EditableTemplate {
  id: string;
  label: string;
  description: string;
  content: string;
}

export type TemplateErrors = Record<string, string>;

export function validateTemplate(t: EditableTemplate, all: EditableTemplate[]): TemplateErrors {
  const errors: TemplateErrors = {};

  if (!t.label.trim()) {
    errors.label = 'Required';
  } else if (!LABEL_REGEX.test(t.label)) {
    errors.label = 'Only letters, digits, _ and - allowed';
  } else if (all.some(o => o.id !== t.id && o.label === t.label)) {
    errors.label = 'Must be unique';
  }

  if (!t.description.trim()) {
    errors.description = 'Required';
  }

  if (!t.content.trim()) {
    errors.content = 'Required';
  }

  return errors;
}

export function isAllValid(templates: EditableTemplate[]): boolean {
  return templates.every(t => Object.keys(validateTemplate(t, templates)).length === 0);
}

let _counter = 0;
function nextId(): string {
  return `tpl-${++_counter}`;
}

function parse(raw: string): EditableTemplate[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return [];
    return Object.entries(parsed as Record<string, unknown>)
      .filter(
        ([, v]) =>
          v !== null &&
          typeof v === 'object' &&
          !Array.isArray(v) &&
          typeof (v as Record<string, unknown>).description === 'string' &&
          typeof (v as Record<string, unknown>).content === 'string',
      )
      .map(([label, v]) => ({
        id: nextId(),
        label,
        description: (v as StoredTemplate).description,
        content: (v as StoredTemplate).content,
      }));
  } catch {
    return [];
  }
}

export class TemplatesService {
  public static readonly instance = new TemplatesService();

  private get svc(): UserProfileHttpService {
    return resolveService(UserProfileHttpService);
  }

  public async loadTemplates(): Promise<EditableTemplate[]> {
    const profile = await this.svc.getUserProfile();
    return parse(profile.UserSettings?.[TEMPLATES_SETTING_KEY] ?? '');
  }

  public async saveTemplates(templates: EditableTemplate[]): Promise<void> {
    const svc = this.svc;
    const profile = await svc.getUserProfile();

    const stored: StoredTemplates = {};
    for (const t of templates) {
      stored[t.label] = { description: t.description, content: t.content };
    }

    const updated = {
      ...profile,
      UserSettings: {
        ...(profile.UserSettings ?? {}),
        [TEMPLATES_SETTING_KEY]: JSON.stringify(stored),
      },
    };

    await svc.updateUserProfile(updated);
  }
}
