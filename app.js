import React from "react";
import ReactDOM from "react-dom/client";


/**
 * Header {component}
 *  - Logo
 *  - Nav Items
 * 
 * Body {component}
 *  - Search
 *  - RestaurantContainer{component}
 *     - RestaurantCard
 *       - Img
 *       - Name of Res, Star Rating, cuisine, delivery time
 * 
 * Footer {component}
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */


const Header = () => {
        return(
          <div className="header">

                <div className="logo-container">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0FzWLdzlrL3sETO99mNCl6RQ8YQlqNCtwDQ&usqp=CAU"/>
                </div>

                <div className="nav-items">
                        <ul>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Cart</li>
                        </ul>

                </div>

          </div>

        );
}


const RestaurantCard = (props) => {
 

        const { resData } = props;

        const {name,cuisines,avgRating,costForTwo,deliveryTime,cloudinaryImageId} = resData?.info;
       // console.log(props); props normal js object baan ke pass hote hai... { From parent component to child component. }
        return (
          <div className="res-card"  style={{ backgroundColor: "#f0f0f0"}}>
            <img className ="logo" src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId } />

            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>

          </div>

        );
}

const resList =[
        {
          "info": {
            "id": "18973",
            "name": "Nandhana Palace",
            "cloudinaryImageId": "195876a3181ef63f76e45e3a7b49b585",
            "locality": "Koramangala",
            "areaName": "Koramangala",
            "costForTwo": "₹500 for two",
            "cuisines": [
              "Biryani",
              "Andhra",
              "South Indian",
              "North Indian"
            ],
            "avgRating": 4.2,
            "parentId": "2120",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 16,
              "lastMileTravel": 0.6,
              "serviceability": "SERVICEABLE",
              "slaString": "15-20 mins",
              "lastMileTravelString": "0.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-24 01:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹175 OFF",
              "subHeader": "ABOVE ₹449",
              "discountTag": "FLAT DEAL"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "text": "BENEFITS",
                "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
              },
              "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/nandhana-palace-koramangala-bangalore-18973",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "25620",
            "name": "KFC",
            "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
            "locality": "Intermediate Ring Road",
            "areaName": "Ejipura",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Burgers",
              "Biryani",
              "American",
              "Snacks",
              "Fast Food"
            ],
            "avgRating": 4.2,
            "parentId": "547",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 16,
              "lastMileTravel": 0.9,
              "serviceability": "SERVICEABLE",
              "slaString": "15-20 mins",
              "lastMileTravelString": "0.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-23 23:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "text": "BENEFITS",
                "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
              },
              "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/kfc-intermediate-ring-road-ejipura-bangalore-25620",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "140887",
            "name": "McDonald's",
            "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
            "locality": "Mantri Avenue",
            "areaName": "Koramangala",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Burgers",
              "Beverages",
              "Cafe",
              "Desserts"
            ],
            "avgRating": 4.5,
            "parentId": "630",
            "avgRatingString": "4.5",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 18,
              "lastMileTravel": 1.4,
              "serviceability": "SERVICEABLE",
              "slaString": "15-20 mins",
              "lastMileTravelString": "1.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-23 23:45:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available"
                      }
                    }
                  ]
                }
              }
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "text": "BENEFITS",
                "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
              },
              "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/mcdonalds-mantri-avenue-koramangala-bangalore-140887",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "108424",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "vw6n5betlssnqelt7rmu",
            "locality": "5TH Block",
            "areaName": "Koramangala",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Pizzas",
              "Italian",
              "Pastas",
              "Desserts"
            ],
            "avgRating": 4.4,
            "parentId": "2456",
            "avgRatingString": "4.4",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 25,
              "serviceability": "SERVICEABLE",
              "slaString": "25 mins",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-24 00:59:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                  "shortDescription": "Kids Favourite options",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                        "shortDescription": "Kids Favourite options"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/dominos-pizza-5th-block-koramangala-bangalore-108424",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "425",
            "name": "Hotel Empire",
            "cloudinaryImageId": "un4omn7rcunkmlw6vikr",
            "locality": "Koramangala",
            "areaName": "Koramangala",
            "costForTwo": "₹450 for two",
            "cuisines": [
              "North Indian",
              "Kebabs",
              "Biryani"
            ],
            "avgRating": 4.3,
            "parentId": "475",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 23,
              "lastMileTravel": 1.3,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "1.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-24 03:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "10% OFF",
              "subHeader": "UPTO ₹40"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "text": "BENEFITS",
                "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
              },
              "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/hotel-empire-koramangala-bangalore-425",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "5934",
            "name": "Burger King",
            "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            "locality": "Koramangala",
            "areaName": "Koramangala",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "Burgers",
              "American"
            ],
            "avgRating": 4.2,
            "parentId": "166",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 19,
              "lastMileTravel": 1.6,
              "serviceability": "SERVICEABLE",
              "slaString": "15-20 mins",
              "lastMileTravelString": "1.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-24 05:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "text": "BENEFITS",
                "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
              },
              "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/burger-king-koramangala-bangalore-5934",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "272239",
            "name": "EatFit",
            "cloudinaryImageId": "6126c9b45de2cb222405c1af8a321e74",
            "locality": "6th Block",
            "areaName": "Koramangala",
            "costForTwo": "₹270 for two",
            "cuisines": [
              "Chinese",
              "Healthy Food",
              "Tandoor",
              "Pizzas",
              "North Indian",
              "Thalis",
              "Biryani"
            ],
            "avgRating": 4.5,
            "parentId": "76139",
            "avgRatingString": "4.5",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 19,
              "lastMileTravel": 0.7,
              "serviceability": "SERVICEABLE",
              "slaString": "15-20 mins",
              "lastMileTravelString": "0.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-23 23:59:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "brand",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "brand"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹159"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "text": "BENEFITS",
                "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
              },
              "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/eatfit-6th-block-koramangala-bangalore-272239",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "289266",
            "name": "BOX8 - Desi Meals",
            "cloudinaryImageId": "69a061b7e0f951cef2b4947946f94ec6",
            "locality": "6TH BLOCK",
            "areaName": "Koramangala",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "North Indian",
              "Biryani",
              "Thalis",
              "Home Food"
            ],
            "avgRating": 4.4,
            "parentId": "10655",
            "avgRatingString": "4.4",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 13,
              "lastMileTravel": 0.6,
              "serviceability": "SERVICEABLE",
              "slaString": "8-18 mins",
              "lastMileTravelString": "0.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-24 02:00:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "text": "BENEFITS",
                "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
              },
              "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/box8-desi-meals-6th-block-koramangala-bangalore-289266",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "263485",
            "name": "Chaayos Chai+Snacks=Relax",
            "cloudinaryImageId": "cace805a6ba74137571d0f7ac92302b1",
            "locality": "Kormangala 8th Block",
            "areaName": "Kormangala",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Bakery",
              "Beverages",
              "Chaat",
              "Desserts",
              "Home Food",
              "Italian",
              "Maharashtrian",
              "Snacks",
              "Street Food",
              "Sweets"
            ],
            "avgRating": 4.5,
            "parentId": "281782",
            "avgRatingString": "4.5",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 21,
              "lastMileTravel": 0.7,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "0.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-24 01:00:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "text": "BENEFITS",
                "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
              },
              "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-8th-block-kormangala-bangalore-263485",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "10820",
            "name": "California Burrito",
            "cloudinaryImageId": "b58sysfvskincfwmgoqd",
            "locality": "Koramangala",
            "areaName": "Koramangala",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Mexican",
              "American",
              "Salads",
              "Continental",
              "Keto",
              "Healthy Food"
            ],
            "avgRating": 4.6,
            "parentId": "1252",
            "avgRatingString": "4.6",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 17,
              "lastMileTravel": 1.3,
              "serviceability": "SERVICEABLE",
              "slaString": "15-20 mins",
              "lastMileTravelString": "1.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-24 01:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹100"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "text": "BENEFITS",
                "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
              },
              "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/california-burrito-koramangala-bangalore-10820",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "11211",
            "name": "Taco Bell",
            "cloudinaryImageId": "d3b3db238b6448c3f297c851e9d0b96b",
            "locality": "Koramangala",
            "areaName": "Koramangala",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Mexican"
            ],
            "avgRating": 4.3,
            "parentId": "1557",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 32,
              "lastMileTravel": 0.9,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "0.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-24 01:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "text": "BENEFITS",
                "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
              },
              "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/taco-bell-koramangala-bangalore-11211",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "70246",
            "name": "Starbucks Coffee",
            "cloudinaryImageId": "258fe8a3577877fbfe064095ed1d9dc3",
            "locality": "7th Block",
            "areaName": "Koramangala",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Beverages",
              "Cafe",
              "Snacks",
              "Desserts",
              "Bakery",
              "Ice Cream"
            ],
            "avgRating": 4.4,
            "parentId": "195515",
            "avgRatingString": "4.4",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 18,
              "lastMileTravel": 1.4,
              "serviceability": "SERVICEABLE",
              "slaString": "15-20 mins",
              "lastMileTravelString": "1.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-23 23:59:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "text": "BENEFITS",
                "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
              },
              "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/starbucks-coffee-7th-block-koramangala-bangalore-70246",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "156119",
            "name": "The Good Bowl",
            "cloudinaryImageId": "6e04be27387483a7c00444f8e8241108",
            "locality": "Jakkasandra",
            "areaName": "Hsr Layout 5th Sector",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Biryani",
              "North Indian",
              "Pastas",
              "Punjabi",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.2,
            "parentId": "7918",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 28,
              "lastMileTravel": 2.4,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "2.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-23 23:59:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹110"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "text": "BENEFITS",
                "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
              },
              "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/the-good-bowl-jakkasandra-hsr-layout-5th-sector-bangalore-156119",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "293023",
            "name": "Istah - The Mediterranean Way",
            "cloudinaryImageId": "9a01f2935fcb5ae05426db8264062102",
            "locality": "6th Block",
            "areaName": "Koramangala",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Mediterranean",
              "Snacks",
              "Biryani",
              "Grill",
              "Kebabs",
              "Arabian",
              "Lebanese",
              "Beverages",
              "Desserts",
              "Italian",
              "Turkish"
            ],
            "avgRating": 4.5,
            "parentId": "3518",
            "avgRatingString": "4.5",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 19,
              "lastMileTravel": 0.7,
              "serviceability": "SERVICEABLE",
              "slaString": "15-20 mins",
              "lastMileTravelString": "0.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-24 02:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                  "description": "OnlyOnSwiggy"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "OnlyOnSwiggy",
                        "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹110"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "text": "BENEFITS",
                "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
              },
              "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/istah-the-mediterranean-way-6th-block-koramangala-bangalore-293023",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "65797",
            "name": "Leon's - Burgers & Wings (Leon Grill)",
            "cloudinaryImageId": "b2edbc28b7b8219d6e0a9c049ce06658",
            "locality": "Koramangala",
            "areaName": "Koramangala",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "American",
              "Snacks",
              "Turkish",
              "Portuguese",
              "Continental"
            ],
            "avgRating": 4.4,
            "parentId": "371281",
            "avgRatingString": "4.4",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 21,
              "lastMileTravel": 1.3,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "1.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-24 04:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "text": "BENEFITS",
                "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
              },
              "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-koramangala-bangalore-65797",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "139558",
            "name": "Dindigul Thalappakatti",
            "cloudinaryImageId": "exhzkyd9pjoqlobruy4v",
            "locality": "HSR Layout",
            "areaName": "HSR Layout",
            "costForTwo": "₹650 for two",
            "cuisines": [
              "Biryani",
              "Barbecue",
              "South Indian",
              "Chinese",
              "North Indian"
            ],
            "avgRating": 4.2,
            "parentId": "332",
            "avgRatingString": "4.2",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 31,
              "lastMileTravel": 4.1,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "4.1 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-24 01:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹100"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "text": "BENEFITS",
                "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
              },
              "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/dindigul-thalappakatti-hsr-layout-bangalore-139558",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "10576",
            "name": "Pizza Hut",
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
            "locality": "Koramangala",
            "areaName": "Koramangala",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "Pizzas"
            ],
            "avgRating": 4,
            "parentId": "721",
            "avgRatingString": "4.0",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 22,
              "lastMileTravel": 0.7,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "0.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-24 04:00:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                  "shortDescription": "Kids Favourite options",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                        "shortDescription": "Kids Favourite options"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "text": "BENEFITS",
                "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
              },
              "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/pizza-hut-koramangala-bangalore-10576",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "48207",
            "name": "Kanti Sweets",
            "cloudinaryImageId": "edwvxmied0cj3m23gphk",
            "locality": "3rd Block",
            "areaName": "Koramangala",
            "costForTwo": "₹150 for two",
            "cuisines": [
              "Sweets"
            ],
            "avgRating": 4.6,
            "veg": true,
            "parentId": "4700",
            "avgRatingString": "4.6",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 13,
              "lastMileTravel": 0.7,
              "serviceability": "SERVICEABLE",
              "slaString": "10-15 mins",
              "lastMileTravelString": "0.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-23 23:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "text": "BENEFITS",
                "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
              },
              "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/kanti-sweets-3rd-block-koramangala-bangalore-48207",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "319086",
            "name": "Baskin Robbins - Ice Cream Desserts",
            "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
            "locality": "4th B Block",
            "areaName": "Koramangala",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Desserts"
            ],
            "avgRating": 4.7,
            "veg": true,
            "parentId": "5588",
            "avgRatingString": "4.7",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 14,
              "lastMileTravel": 0.6,
              "serviceability": "SERVICEABLE",
              "slaString": "10-15 mins",
              "lastMileTravelString": "0.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-23 23:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "30% OFF",
              "subHeader": "UPTO ₹75"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "text": "BENEFITS",
                "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
              },
              "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-4th-b-block-koramangala-bangalore-319086",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "22741",
            "name": "Chai Point",
            "cloudinaryImageId": "h1o3wrgyzmfar7jknllr",
            "locality": "1st Block",
            "areaName": "Koramangala",
            "costForTwo": "₹150 for two",
            "cuisines": [
              "Bakery",
              "Beverages",
              "Maharashtrian",
              "Snacks",
              "Street Food",
              "South Indian",
              "Punjabi",
              "Chaat",
              "Indian",
              "American",
              "North Indian",
              "Fast Food",
              "Desserts",
              "Cafe",
              "Healthy Food",
              "Home Food"
            ],
            "avgRating": 4.5,
            "parentId": "1607",
            "avgRatingString": "4.5",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 1.2,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "1.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-23 23:00:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "text": "BENEFITS",
                "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
              },
              "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/chai-point-1st-block-koramangala-bangalore-22741",
            "type": "WEBLINK"
          }
        }
      ];


const Body = () => {

        return (

                <div className="body">
                        <div className="search"> Search </div>
                        <div className="res-container">

                          {
                                // resList is an array and usske andar alag alag restaurants ka data hai... hame har ek restaurant ke liye RestaurantCard ko call karna hai.... { ek tareeke se bole to map karna hai...}

                                // whenever you are looping using map yo have to give unique key.
                                resList.map((restaurant) => (
                                        <RestaurantCard key = {restaurant.info.id} resData={restaurant}/>
                                ))
                          }
                           
                           
                        </div>
                </div>

        );
}

const AppLayout = () => {

        return (

                <div className="app">
                        <Header />
                        <Body/>
                </div>

        );
}


const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(<AppLayout />);


