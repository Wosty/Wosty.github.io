class OrderedImageCard {
    imageUrl: string;
    imageCaption: string;
    imageAltText: string;
    imageOrder: number;

    public constructor(imageUrl: string, caption: string | undefined, imageAltText: string, imageOrder: number | undefined) {
        this.imageUrl = imageUrl;
        if (typeof caption !== 'undefined') {
            this.imageCaption = caption;
        }
        else {
            this.imageCaption = "";
        }
        this.imageAltText = imageAltText;
        this.imageOrder = imageOrder ?? Number.MAX_SAFE_INTEGER;
    }

}

export default OrderedImageCard;