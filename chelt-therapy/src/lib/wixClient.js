import { createClient, OAuthStrategy } from '@wix/sdk';
import { items } from '@wix/data';

const WIX_CLIENT_ID = '6aa1ab42-1d0f-4ea1-a4ae-fcd6b67e9ff9';
const CMS_COLLECTION = 'FormularioChelt';

const wixClient = createClient({
    modules: { items },
    auth: OAuthStrategy({ clientId: WIX_CLIENT_ID }),
});

export async function submitFormToWix(formData) {
    const data = {
        nombre: formData.name,
        correo: formData.email,
        telefono: formData.phone,
        perfil: formData.role,
        estado: formData.state,
        marketing: formData.consentMarketing,
    };

    const result = await wixClient.items.insert(CMS_COLLECTION, data);
    return result;
}
