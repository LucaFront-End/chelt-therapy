import { createClient, OAuthStrategy } from '@wix/sdk';
import { items } from '@wix/data';

const WIX_CLIENT_ID = '6aa1ab42-1d0f-4ea1-a4ae-fcd6b67e9ff9';
const CMS_COLLECTION = 'FormularioCureo';

const wixClient = createClient({
    modules: { items },
    auth: OAuthStrategy({ clientId: WIX_CLIENT_ID }),
});

/**
 * Submit contact form data to Wix CMS collection "Formulario Cureo"
 */
export async function submitFormToWix(formData) {
    const data = {
        nombre: formData.name,
        correo: formData.email,
        telefono: formData.phone,
        perfil: formData.role,
        estado: formData.state,
        marketing: formData.consentMarketing,
    };

    console.log('Submitting to Wix CMS:', data);

    try {
        const result = await wixClient.items.insert(CMS_COLLECTION, data);
        console.log('Wix CMS Response:', result);
        return result;
    } catch (err) {
        console.error('Wix CMS Error Details:', {
            message: err.message,
            code: err.code,
            details: err.details,
            full: err,
        });
        throw err;
    }
}
