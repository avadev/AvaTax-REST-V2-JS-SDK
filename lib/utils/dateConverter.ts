import { JsonConverter, JsonCustomConvert } from "json2typescript";

@JsonConverter
export class DateConverter implements JsonCustomConvert<Date> {
    serialize(data: Date) {
        return data;
    }
    deserialize(enumType: string): Date {
        return new Date(enumType);
    }
}