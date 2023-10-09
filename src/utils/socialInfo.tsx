import LogoInstagram from '../assets/componentSVG/LogoInstagram'
import LogoTwitter from '../assets/componentSVG/LogoTwitter'
import LogoYoutube from '../assets/componentSVG/LogoYoutube'
import { type SocialMediaType } from '../types/types'

export const socialMedia: SocialMediaType[] = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com',
    logo: <LogoInstagram />,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis metus ipsum, at tempus nisl convallis quis. Nam fringilla rhoncus nunc, non bibendum ipsum imperdiet vel. Mauris interdum ut lorem in iaculis. Ut convallis elit eu mauris rutrum laoreet. Sed hendrerit egestas velit id mattis. Ut et rhoncus lectus. Praesent at dolor at dui bibendum luctus eget sit amet purus. Fusce tempus magna non risus efficitur, ac pulvinar orci ornare. Sed elit tellus, volutpat non dictum nec, feugiat at lorem. Etiam pellentesque aliquet nisi eget mollis. Sed quis est nunc.',
    buttonText: 'Conócenos mejor'
  },
  {
    name: 'Youtube',
    link: 'https://www.youtube.com',
    logo: <LogoYoutube />,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis metus ipsum, at tempus nisl convallis quis. Nam fringilla rhoncus nunc, non bibendum ipsum imperdiet vel. Mauris interdum ut lorem in iaculis. Ut convallis elit eu mauris rutrum laoreet. Sed hendrerit egestas velit id mattis. Ut et rhoncus lectus. Praesent at dolor at dui bibendum luctus eget sit amet purus. Fusce tempus magna non risus efficitur, ac pulvinar orci ornare. Sed elit tellus, volutpat non dictum nec, feugiat at lorem. Etiam pellentesque aliquet nisi eget mollis. Sed quis est nunc.',
    buttonText: 'Ver videos'
  },
  {
    name: 'Twitter',
    link: 'https://www.x.com',
    logo: <LogoTwitter />,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis metus ipsum, at tempus nisl convallis quis. Nam fringilla rhoncus nunc, non bibendum ipsum imperdiet vel. Mauris interdum ut lorem in iaculis. Ut convallis elit eu mauris rutrum laoreet. Sed hendrerit egestas velit id mattis. Ut et rhoncus lectus. Praesent at dolor at dui bibendum luctus eget sit amet purus. Fusce tempus magna non risus efficitur, ac pulvinar orci ornare. Sed elit tellus, volutpat non dictum nec, feugiat at lorem. Etiam pellentesque aliquet nisi eget mollis. Sed quis est nunc.',
    buttonText: 'Enterate de nuestras novedades'
  }
]
