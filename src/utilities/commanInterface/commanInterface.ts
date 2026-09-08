export type ManifestoCardProps = {
    icon: React.ReactNode;
    title: string;
    paragraphs: string[];
};

export type DemandsCardProps = {
    icon: React.ReactNode;
    title: string;
    paragraph: string
};

export interface GenericObjectInterface {
    [key: string]: any;
}

export interface ImageItem {
    _id: string;
    imageUrl: string;

    year: string;
    city: string;
    date: string;
    description?: string; // Optional field for image description
    imageName?: string; // Optional field for image name

    // Add any other fields your image objects contain
}
