import { NumberAttr, SetAttr, StringAttr } from '../../../abstractions';
import { IAttributeSection } from '../../../abstractions/attribute-interfaces';
import { vAspectRatio, vCameraLensMount, vCameraSensorFormat } from '../../values';

export const sectionCameraAttrs = <const>{
    'camera.imageSensor.numberOfPixels': NumberAttr({
        name: 'Number of pixels (image sensor)',
        description: 'The image sensors total resolution.',
        unit: 'MP',
    }),
    'camera.imageSensor.aspectRatio': SetAttr({
        name: 'Aspect ratio',
        definitionUrl: 'https://en.wikipedia.org/wiki/Aspect_ratio',
        values: vAspectRatio,
        allowCustomValues: true,
        pattern: '\\d+:\\d+',
    }),
    'camera.imageSensor.format': SetAttr({
        name: 'Image sensor format',
        definitionUrl: 'https://en.wikipedia.org/wiki/Image_sensor_format',
        values: vCameraSensorFormat,
        allowCustomValues: true,
        pattern: '\\d+:\\d+',
    }),
    'camera.lens.mount': SetAttr({
        name: 'Lens mount',
        definitionUrl: 'https://en.wikipedia.org/wiki/Lens_mount',
        values: vCameraLensMount,
        allowCustomValues: true,
    }),
    'camera.imageStabilization': SetAttr({
        name: 'Image stabilization',
        definitionUrl: 'https://en.wikipedia.org/wiki/Image_stabilization',
        values: ['optical', 'digital'],
        allowCustomValues: true
    }),
    'camera.zoom.type': SetAttr({
        name: 'Zoom type',
        values: ['optical', 'digital'],
        allowCustomValues: true,
    }),
    'camera.zoom.range': StringAttr({
        name: 'Zoom range',
    }),
};

export const sectionCamera: IAttributeSection<typeof sectionCameraAttrs> = {
    name: 'Camera',
    key: 'camera',
    description: 'Photo camera description.',
    attributes: sectionCameraAttrs
}
