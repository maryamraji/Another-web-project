const getRatingData =() =>  [
    'AMDP-System',
    'Clinical Global Impression',
    'Comprehensive Psychopathological Rating Scale (CPRS)',
    'Global Assessment of Functioning (GAF)',
    "Children's Global Assessment Scale",] 

const ratingMiddleware = (req, res, next) => {
        if(!res.locals.partials) res.locals.partials = []
        res.locals.partials.ratingScaleContext = getRatingData()
        next()
      }
      
      module.exports = ratingMiddleware
        